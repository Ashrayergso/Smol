```python
from rest_framework import serializers
from backend.models import Crew

class CrewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crew
        fields = ['id', 'name', 'position', 'contract_duration', 'vacation_time', 'qualifications', 'certifications', 'previous_assignments', 'preferred_contract_lengths']
```