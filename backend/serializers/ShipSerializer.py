```python
from rest_framework import serializers
from backend.models import Ship

class ShipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ship
        fields = ['id', 'name', 'capacity', 'crew_allowance', 'sailing_schedule']
```