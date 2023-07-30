```python
from rest_framework import serializers
from backend.models import ShipCrewAllowance

class ShipCrewAllowanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShipCrewAllowance
        fields = ['id', 'ship', 'position', 'max_crew', 'min_crew']
```