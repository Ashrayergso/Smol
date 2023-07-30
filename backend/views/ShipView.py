```python
from rest_framework import viewsets
from backend.models import Ship
from backend.serializers import ShipSerializer

class ShipView(viewsets.ModelViewSet):
    queryset = Ship.objects.all()
    serializer_class = ShipSerializer
```