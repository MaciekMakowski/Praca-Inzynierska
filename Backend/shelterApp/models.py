from django.db import models
from .validators import *
# Create your models here.


class Pets(models.Model):
    petId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, validators=[NamesValidation])
    number = models.CharField(max_length=9, validators=[NumberValidation])
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
    sex = models.CharField(max_length=6, choices=sex_type)

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
