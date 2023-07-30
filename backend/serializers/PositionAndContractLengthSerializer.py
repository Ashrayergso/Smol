```python
from rest_framework import serializers
from backend.models import PositionAndContractLength

class PositionAndContractLengthSerializer(serializers.ModelSerializer):
    class Meta:
        model = PositionAndContractLength
        fields = ['id', 'position', 'contract_length']
```