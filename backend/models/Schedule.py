```python
from django.db import models
from .Crew import Crew
from .Ship import Ship

class Schedule(models.Model):
    crew = models.ForeignKey(Crew, on_delete=models.CASCADE)
    ship = models.ForeignKey(Ship, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"{self.crew.name} - {self.ship.name} - {self.start_date} to {self.end_date}"
```