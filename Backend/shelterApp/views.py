from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.reverse import reverse
from django_filters import AllValuesFilter, DateTimeFilter, NumberFilter, FilterSet
# Create your views here.


class PetsList(generics.ListCreateAPIView):
    name = 'Pets'
    queryset = Pets.objects.all()
    serializer_class = PetsSerializer


class PetDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'pets-detail'
    queryset = Pets.objects.all()
    serializer_class = PetsSerializer


class DiseasesList(generics.ListCreateAPIView):
    name = 'DiseasesList'
    queryset = Diseases.objects.all()
    serializer_class = DiseasesSerializer


class DiseaseDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'diseases-detail'
    queryset = Diseases.objects.all()
    serializer_class = DiseasesSerializer


class PetsDiseasesList(generics.ListCreateAPIView):
    name = 'PetsDiseasesList'
    queryset = PetsDiseases.objects.all()
    serializer_class = PetDiseaseSerializer


class PetDiseaseDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'petsdiseases-detail'
    queryset = PetsDiseases.objects.all()
    serializer_class = PetDiseaseSerializer


class IsolationsList(generics.ListCreateAPIView):
    name = 'IsolationsList'
    queryset = Isolations.objects.all()
    serializer_class = IsolationsSerializer


class IsolationsDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'isolations-detail'
    queryset = Isolations.objects.all()
    serializer_class = IsolationsSerializer


class ResourcesList(generics.ListCreateAPIView):
    name = 'ResourcesList'
    queryset = Resources.objects.all()
    serializer_class = ResourcesSerializer


class ResourcesDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'resources-detail'
    queryset = Resources.objects.all()
    serializer_class = ResourcesSerializer


class ResourcesTypesList(generics.ListCreateAPIView):
    name = 'ResourcesTypesList'
    queryset = ResourcesTypes.objects.all()
    serializer_class = ResourcesTypeSerializer


class ResourceTypeDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'resourcestypes-detail'
    queryset = ResourcesTypes.objects.all()
    serializer_class = ResourcesTypeSerializer

class AdoptingList(generics.ListCreateAPIView):
    name = 'AdoptingList'
    queryset = Adopting.objects.all()
    serializer_class = AdoptingSerializer


class AdoptingDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'adopting-detail'
    queryset = Adopting.objects.all()
    serializer_class = AdoptingSerializer


class WorkersList(generics.ListCreateAPIView):
    name = 'WorkersList'
    queryset = Workers.objects.all()
    serializer_class = WorkersSerializer


class WorkerDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'workers-detail'
    queryset = Workers.objects.all()
    serializer_class = WorkersSerializer


class AdoptionsList(generics.ListCreateAPIView):
    name = 'AdoptionsList'
    queryset = Adoptions.objects.all()
    serializer_class = AdoptionsSerializer


class AdoptionDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'adoptions-detail'
    queryset = Adoptions.objects.all()
    serializer_class = AdoptionsSerializer


class VacationsList(generics.ListCreateAPIView):
    name = 'VacationsList'
    queryset = Vacations.objects.all()
    serializer_class = VacationsSerializer


class VacationDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'vacations-detail'
    queryset = Vacations.objects.all()
    serializer_class = VacationsSerializer


class WorkersRequestsList(generics.ListCreateAPIView):
    name = 'WorkersRequestsLists'
    queryset = WorkerRequests.objects.all()
    serializer_class = WorkerRequestsSerializer


class WorkerRequestDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'workerrequests-detail'
    queryset = WorkerRequests.objects.all()
    serializer_class = WorkerRequestsSerializer


class VolunteersList(generics.ListCreateAPIView):
    name = 'VolunteersList'
    queryset = Volunteers.objects.all()
    serializer_class = VolunteersSerializer


class VolunteerDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'volunteers-detail'
    queryset = Volunteers.objects.all()
    serializer_class = VolunteersSerializer


class VolunteerMeetingsList(generics.ListCreateAPIView):
    name = 'VolunteerMeetingsList'
    queryset = VolunteerMeetings.objects.all()
    serializer_class = VolunteerMeetingsSerializer


class VolunteerMeetingDetail(generics.RetrieveUpdateDestroyAPIView):
    name = 'volunteermeetings-detail'
    queryset = VolunteerMeetings.objects.all()
    serializer_class = VolunteerMeetingsSerializer


class ApiRoot(generics.GenericAPIView):
    name = 'api-root'
    def get(self, request, *args, **kwargs):
        return Response({'PetsList': reverse(PetsList.name, request=request),
                         'DiseasesList': reverse(DiseasesList.name, request=request),
                         'PetsDiseasesList': reverse(PetsDiseasesList.name, request=request),
                         'IsolationsList': reverse(IsolationsList.name, request=request),
                         'ResourcesList': reverse(ResourcesList.name, request=request),
                         'ResourcesTypesList': reverse(ResourcesTypesList.name, request=request),
                         'AdoptingList': reverse(AdoptingList.name, request=request),
                         'WorkersList': reverse(WorkersList.name, request=request),
                         'AdoptionsList': reverse(AdoptionsList.name, request=request),
                         'VacationsList': reverse(VacationsList.name, request=request),
                         'WorkersRequestsList': reverse(WorkersRequestsList.name, request=request),
                         'VolunteersList': reverse(VolunteersList.name, request=request),
                         'VolunteerMeetingsList': reverse(VolunteerMeetingsList.name, request=request),
})
