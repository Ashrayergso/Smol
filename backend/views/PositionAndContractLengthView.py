
from rest_framework import viewsets
from backend.models import PositionAndContractLength
from backend.serializers import PositionAndContractLengthSerializer

class PositionAndContractLengthView(viewsets.ModelViewSet):
    queryset = PositionAndContractLength.objects.all()
    serializer_class = PositionAndContractLengthSerializer
