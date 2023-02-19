import datetime
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Pets, PetsDiseases, Diseases, Isolations, Volunteers, VolunteerMeetings, Adopting, Workers, Vacations, WorkerRequests, Adoptions, Resources, ResourcesTypes

class PetsSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Pets
        fields = ['url', 'petId', 'name', 'number', 'findDate', 'findPlace', 'type', 'age', 'race', 'weight', 'sex', 'state']


class DiseasesSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Diseases
        fields = ['url', 'diseaseId', 'name', 'desc']


class PetDiseaseSerializer(serializers.HyperlinkedModelSerializer):
    pet = serializers.SlugRelatedField(queryset=Pets.objects.all(), slug_field='name')
    disease = serializers.SlugRelatedField(queryset=Diseases.objects.all(), slug_field='name')
    class Meta:
        model = PetsDiseases
        fields = ['url', 'petDiseaseId', 'startDate', 'endDate', 'pet', 'disease']


class IsolationsSerializer(serializers.HyperlinkedModelSerializer):
    pet = serializers.SlugRelatedField(queryset=Pets.objects.all(), slug_field='name')

    class Meta:
        model = Isolations
        fields = ['url', 'isolationId', 'reason', 'startDate', 'endDate', 'pet']


class WorkersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Workers
        fields = ['url', 'workerId', 'name', 'lastName', 'birthDate', 'city', 'postcode', 'address', 'phoneNumber', 'profession']


class VacationsSerializer(serializers.HyperlinkedModelSerializer):
    worker = serializers.SlugRelatedField(queryset=Workers.objects.all(), slug_field='lastName')
    class Meta:
        model = Vacations
        fields = ['url', 'VacationId', 'startDate', 'endDate', 'worker']


class WorkerRequestsSerializer(serializers.HyperlinkedModelSerializer):
    worker = serializers.SlugRelatedField(queryset=Workers.objects.all(), slug_field='lastName')

    class Meta:
        model = WorkerRequests
        fields = ['url', 'RequestId', 'title', 'desc', 'worker']


class AdoptingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Adopting
        fields = ['url', 'adoptingId', 'name', 'lastName', 'birthDate', 'city', 'postcode', 'address', 'phoneNumber']


class AdoptionsSerializer(serializers.HyperlinkedModelSerializer):
    adopting = serializers.SlugRelatedField(queryset=Adopting.objects.all(), slug_field='lastName')
    pet = serializers.SlugRelatedField(queryset=Pets.objects.all(), slug_field='number')
    worker = serializers.SlugRelatedField(queryset=Workers.objects.all(), slug_field='lastName')
    class Meta:
        model = Adoptions
        fields = ['url', 'adoptionsId', 'adopting', 'pet', 'worker', 'date']


class VolunteersSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Volunteers
        fields = ['url', 'volunteerId', 'name', 'lastName', 'birthDate', 'city', 'postcode', 'address', 'phoneNumber']


class VolunteerMeetingsSerializer(serializers.HyperlinkedModelSerializer):
    volunteer = serializers.SlugRelatedField(queryset=Volunteers.objects.all(), slug_field='lastName')
    pet = serializers.SlugRelatedField(queryset=Pets.objects.all(), slug_field='number')
    class Meta:
        model = VolunteerMeetings
        fields = ['url', 'VolunteerMeetingId', 'date', 'volunteer', 'pet']


class ResourcesTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ResourcesTypes
        fields = ['url', 'ResourcesTypeId', 'type']


class ResourcesSerializer(serializers.HyperlinkedModelSerializer):
    resourceType = serializers.SlugRelatedField(queryset=ResourcesTypes.objects.all(), slug_field='type')
    class Meta:
        model = Resources
        fields = ['url', 'ResourcesId', 'name', 'resourceType', 'quantity', 'expiryDate', 'status']