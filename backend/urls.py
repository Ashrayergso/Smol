from django.urls import path
from .views import CrewView, ShipView, AssignmentView, ScheduleView, ShipSailingScheduleView, PositionAndContractLengthView, ShipCrewAllowanceView, CertificateTypesAndExpiryView

urlpatterns = [
    path('crew/', CrewView.as_view(), name='crew'),
    path('ship/', ShipView.as_view(), name='ship'),
    path('assignment/', AssignmentView.as_view(), name='assignment'),
    path('schedule/', ScheduleView.as_view(), name='schedule'),
    path('shipsailingschedule/', ShipSailingScheduleView.as_view(), name='shipsailingschedule'),
    path('positionandcontractlength/', PositionAndContractLengthView.as_view(), name='positionandcontractlength'),
    path('shipcrewallowance/', ShipCrewAllowanceView.as_view(), name='shipcrewallowance'),
    path('certificatetypesandexpiry/', CertificateTypesAndExpiryView.as_view(), name='certificatetypesandexpiry'),
]
