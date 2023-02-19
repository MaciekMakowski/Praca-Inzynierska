from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
import datetime

def NumberValidation(number: str):
    if len(str(datetime.date.today().month))<2:
        month = "0"+str(datetime.date.today().month)
    else:
        month = str(datetime.date.today().month)
    if number[0:2:] != str(datetime.date.today().year)[2:4:] or number[2:4:] != month:
        print(str(datetime.date.today().year)[2:4:])
        raise ValidationError(_("Podano nieprawidłowy początek numeru!"))

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