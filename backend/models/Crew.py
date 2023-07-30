```python
from django.db import models

class Crew(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    contract_duration = models.IntegerField()
    vacation_time = models.IntegerField()
    qualifications = models.TextField()
    certifications = models.TextField()
    previous_assignments = models.TextField()
    preferred_contract_lengths = models.IntegerField()

    def __str__(self):
        return self.name
```