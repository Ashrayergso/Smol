
from rest_framework import viewsets
from backend.models import ShipCrewAllowance
from backend.serializers import ShipCrewAllowanceSerializer

class ShipCrewAllowanceView(viewsets.ModelViewSet):
    queryset = ShipCrewAllowance.objects.all()
    serializer_class = ShipCrewAllowanceSerializer
