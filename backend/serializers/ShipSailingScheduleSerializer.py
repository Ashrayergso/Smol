```python
from rest_framework import serializers
from backend.models import ShipSailingSchedule

class ShipSailingScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShipSailingSchedule
        fields = ['id', 'ship', 'departure_date', 'arrival_date', 'port_of_departure', 'port_of_arrival']
```