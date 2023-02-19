from django.db import models
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
import datetime
# Create your models here.

def AgeValidation(age: int):
    if age > 30 or age < 0:
        raise ValidationError(_("Podano niemożliwy wiek zwierzęcia!"))

def WeightValidation(weight: int):
    if weight > 200 or weight < 0:
        raise ValidationError(_("Podano niemożliwą wagę zwierzęcia!"))

def PhoneNumberValidation(number: int):
    if number < 0:
        raise ValidationError(_("Numer komórkowy nie może być wartością ujemną"))
    elif len(str(number)) != 9:
        raise ValidationError(_("Numer komórkowy musi składać się z 9 cyfr"))
    elif str(number).isalpha():
        raise ValidationError(_("Numer komórkowy musi składać się z 9 cyfr"))

def PostcodeValidation(code: str):
    if len(code) < 6:
        raise ValidationError(_("Kod pocztowy musi składać się z 6 znaków"))
    if code[2] != '-':
        raise ValidationError(_("Kod pocztowy musi wyglądać następująco xx-xxx"))
    for char in range(len(code)):
        if char != 2:
            if code[char].isalpha():
                raise ValidationError(_("Kod pocztowy musi składać się z cyfr"))

def QuantityValidation(value: int):
    if value < 0:
        raise ValidationError(_("Ilość nie może być wartością ujemną"))

def NamesValidation(name: str):
    if not name.isalpha():
        raise ValidationError(_("Pole powinno zawierać tylko litery"))

def EarlierDateValidation(date: datetime):
    if date > datetime.date.today():
        raise ValidationError(_("Data nie może być nowsza niż dzisiejsza data."))

def DateValidation(date: datetime):
    if date < datetime.date.today():
        raise ValidationError(_("Data nie może być wcześniejsza niż dzisiejsza data."))

def BirthDateValidation(date:datetime):
    now = datetime.date.today()
    if now.year - date.year < 18 or now.year - date.year == 18 and (now.month < date.month or now.month == date.month
                                                                    and now.day <= date.day):
        raise ValidationError(_("Osoba musi być pełnoletnia by ją zarejestrować"))

class Pets(models.Model):
    petId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, validators=[NamesValidation])
    number = models.CharField(max_length=9)
    findDate = models.DateField(validators=[EarlierDateValidation])
    findPlace = models.CharField(max_length=45)

    DOG = "Pies"
    CAT = "Kot"
    pet_type = [
        (DOG, "Pies"),
        (CAT, "Kot"),
    ]
    type = models.CharField(max_length=4, choices=pet_type, default=DOG)
    age = models.IntegerField(validators=[AgeValidation])
    race = models.CharField(max_length=45, validators=[NamesValidation])
    weight = models.IntegerField(validators=[WeightValidation])

    MALE = "Samiec"
    FEMALE = "Samica"
    sex_type = [
        (MALE, "Samiec"),
        (FEMALE, "Samica"),
    ]
    sex = models.CharField(max_length=6, choices=sex_type, default=MALE)

    TOADOPT = "Do adopcji"
    ILL = "Chory"
    ISOLATED = "Izolowany"
    ADOPTED = "Adoptowany"
    state_type = [
        (TOADOPT, "Do adopcji"),
        (ILL, "Chory"),
        (ISOLATED, "Izolowany"),
        (ADOPTED, "Adoptowany"),
    ]
    state = models.CharField(max_length=10, choices=state_type, default=TOADOPT)

    def __str__(self):
        return self.number

class Isolations(models.Model):
    isolationId = models.AutoField(primary_key=True)
    reason = models.CharField(max_length=45)
    startDate = models.DateField(validators=[EarlierDateValidation])
    endDate = models.DateField(validators=[DateValidation])
    pet = models.ForeignKey('Pets', on_delete=models.CASCADE, null=False)



class Diseases(models.Model):
    diseaseId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    desc = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class PetsDiseases(models.Model):
    petDiseaseId = models.AutoField(primary_key=True)
    startDate = models.DateField(validators=[EarlierDateValidation])
    endDate = models.DateField(validators=[DateValidation])
    pet = models.ForeignKey('Pets', on_delete=models.CASCADE, null=False)
    disease = models.ForeignKey('Diseases', on_delete=models.CASCADE, null=False)


class Workers(models.Model):
    workerId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, validators=[NamesValidation])
    lastName = models.CharField(max_length=45, validators=[NamesValidation])
    birthDate = models.DateField(validators=[BirthDateValidation])
    city = models.CharField(max_length=45, validators=[NamesValidation])
    postcode = models.CharField(max_length=6, validators=[PostcodeValidation])
    address = models.CharField(max_length=45)
    phoneNumber = models.IntegerField(validators=[PhoneNumberValidation])
    profession = models.CharField(max_length=45)

    def __str__(self):
        return self.name + ' ' + self.lastName

class Vacations(models.Model):
    VacationId = models.AutoField(primary_key=True)
    startDate = models.DateField(validators=[EarlierDateValidation])
    endDate = models.DateField(validators=[DateValidation])
    worker = models.ForeignKey('Workers', on_delete=models.CASCADE, null=False)


class WorkerRequests(models.Model):
    RequestId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=45)
    desc = models.CharField(max_length=255)
    worker = models.ForeignKey('Workers', on_delete=models.CASCADE, null=False)



class Adopting(models.Model):
    adoptingId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, validators=[NamesValidation])
    lastName = models.CharField(max_length=45, validators=[NamesValidation])
    birthDate = models.DateField(validators=[BirthDateValidation])
    city = models.CharField(max_length=45, validators=[NamesValidation])
    postcode = models.CharField(max_length=6, validators=[PostcodeValidation])
    address = models.CharField(max_length=45)
    phoneNumber = models.IntegerField(validators=[PhoneNumberValidation])


    def __str__(self):
        return self.name + ' ' + self.lastName


class Adoptions(models.Model):
    adoptionsId = models.AutoField(primary_key=True)
    adopting = models.ForeignKey('Adopting', on_delete=models.SET_NULL, null=True)
    pet = models.ForeignKey('Pets', on_delete=models.SET_NULL, null=True)
    worker = models.ForeignKey('Workers', on_delete=models.SET_NULL, null=True)
    date = models.DateField(validators=[EarlierDateValidation])


class Volunteers(models.Model):
    volunteerId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, validators=[NamesValidation])
    lastName = models.CharField(max_length=45, validators=[NamesValidation])
    birthDate = models.DateField(validators=[BirthDateValidation])
    city = models.CharField(max_length=45, validators=[NamesValidation])
    postcode = models.CharField(max_length=6, validators=[PostcodeValidation])
    address = models.CharField(max_length=45)
    phoneNumber = models.IntegerField(validators=[PhoneNumberValidation])

    def __str__(self):
        return self.name + ' ' + self.lastName


class VolunteerMeetings(models.Model):
    VolunteerMeetingId = models.AutoField(primary_key=True)
    date = models.DateField(validators=[EarlierDateValidation])
    volunteer = models.ForeignKey('Volunteers', on_delete=models.SET_NULL, null=True)
    pet = models.ForeignKey('Pets', on_delete=models.SET_NULL, null=True)


class ResourcesTypes(models.Model):
    ResourcesTypeId = models.AutoField(primary_key=True)
    type = models.CharField(max_length=45)

    def __str__(self):
        return self.type


class Resources(models.Model):
    ResourcesId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45)
    resourceType = models.ForeignKey('ResourcesTypes', on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(validators=[QuantityValidation])
    expiryDate = models.DateField(validators=[DateValidation])
    status = models.BooleanField(default=True)
