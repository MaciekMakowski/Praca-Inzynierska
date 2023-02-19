from django.contrib import admin
from django.urls import include, path
from . import views
from .views import *
from django.contrib.admin.views.decorators import staff_member_required


urlpatterns = [
    path('admin/', admin.site.urls),
    path('PetsList/', PetsList.as_view(), name=PetsList.name),
    path('PetsList/<int:pk>', PetDetail.as_view(), name=PetDetail.name),
    path('DiseasesList/', DiseasesList.as_view(), name=DiseasesList.name),
    path('DiseasesList/<int:pk>', DiseaseDetail.as_view(), name=DiseaseDetail.name),
    path('PetsDiseasesList/',  PetsDiseasesList.as_view(), name=PetsDiseasesList.name),
    path('PetsDiseasesList/<int:pk>', PetDiseaseDetail.as_view(), name=PetDiseaseDetail.name),
    path('IsolationsList/', IsolationsList.as_view(), name=IsolationsList.name),
    path('IsolationsList/<int:pk>', IsolationsDetail.as_view(), name=IsolationsDetail.name),
    path('ResourcesList/', ResourcesList.as_view(), name=ResourcesList.name),
    path('ResourcesList/<int:pk>', ResourcesDetail.as_view(), name=ResourcesDetail.name),
    path('ResourcesTypesList/', ResourcesTypesList.as_view(), name=ResourcesTypesList.name),
    path('ResourcesTypesList/<int:pk>', ResourceTypeDetail.as_view(), name=ResourceTypeDetail.name),
    path('AdoptingList/', AdoptingList.as_view(), name=AdoptingList.name),
    path('AdoptingList/<int:pk>', AdoptingDetail.as_view(), name=AdoptingDetail.name),
    path('WorkersList/', WorkersList.as_view(), name=WorkersList.name),
    path('WorkersList/<int:pk>', WorkerDetail.as_view(), name=WorkerDetail.name),
    path('AdoptionsList/', AdoptionsList.as_view(), name=AdoptionsList.name),
    path('AdoptionsList/<int:pk>', AdoptionDetail.as_view(), name=AdoptionDetail.name),
    path('VacationsList/', VacationsList.as_view(), name=VacationsList.name),
    path('VacationsList/<int:pk>', VacationDetail.as_view(), name=VacationDetail.name),
    path('WorkersRequestsList/', WorkersRequestsList.as_view(), name=WorkersRequestsList.name),
    path('WorkersRequestsList/<int:pk>', WorkerRequestDetail.as_view(), name=WorkerRequestDetail.name),
    path('VolunteersList/', VolunteersList.as_view(), name=VolunteersList.name),
    path('VolunteersList/<int:pk>', VolunteerDetail.as_view(), name=VolunteerDetail.name),
    path('VolunteerMeetingsList/', VolunteerMeetingsList.as_view(), name=VolunteerMeetingsList.name),
    path('VolunteerMeetingsList/<int:pk>', VolunteerMeetingDetail.as_view(), name=VolunteerMeetingDetail.name),
    path('', views.ApiRoot.as_view(), name=views.ApiRoot.name)
]