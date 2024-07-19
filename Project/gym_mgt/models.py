# Import necessary modules
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings

class CustomUser(AbstractUser):
    age = models.PositiveIntegerField(blank=True, null=True)
    phone = models.CharField(max_length=10)
    gender = models.CharField(max_length=10, blank=True)
    height = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    image = models.ImageField(upload_to='user_images/', blank=True, null=True)

    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        related_name='custom_user_groups',
        related_query_name='custom_user_group',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        related_name='custom_user_permissions',
        related_query_name='custom_user_permission',
    )
    
# Model for Membership information
class Membership(models.Model):
    
    MEMBERSHIP_TYPES = (
        ('Bronze', 'Bronze'),
        ('Silver', 'Silver'),
        ('Gold', 'Gold'),
        ('Platinum','Platinum')
        # Add other membership types as needed
    )

    # Primary key field
    id = models.AutoField(primary_key=True)
    # Foreign key to link Membership with User (trainee)
    trainee = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # Start date of the membership
    start_date = models.DateField()
    # End date of the membership
    end_date = models.DateField()
    # Type of membership
    membership_type = models.CharField(max_length=20, choices=MEMBERSHIP_TYPES)
    # Add other fields as per your requirements

# Model for Diet Plan
class DietPlan(models.Model):
    # Primary key field
    id = models.AutoField(primary_key=True)
    # Foreign key to link DietPlan with User (trainee)
    trainee = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)


# Model for Diet Plan Details
class DietPlanDetail(models.Model):
    # Choices for days of the week
    DAYS_OF_WEEK = (
        ('Sunday', 'Sunday'),
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
    )
    # Foreign key to link DietPlanDetail with DietPlan
    diet_plan = models.ForeignKey(DietPlan, on_delete=models.CASCADE)
    # Day of the week
    day_of_week = models.CharField(max_length=9, choices=DAYS_OF_WEEK)
    # Meals for morning, afternoon, and evening
    morning = models.CharField(max_length=50, blank=True)
    afternoon = models.CharField(max_length=50, blank=True)
    evening = models.CharField(max_length=50, blank=True)

# Model for Workout Plan
class WorkoutPlan(models.Model):
    # Primary key field
    id = models.AutoField(primary_key=True)
    # Foreign key to link WorkoutPlan with User (trainee)
    trainee = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # Start date of the workout plan
    start_date = models.DateField()
    # End date of the workout plan
    end_date = models.DateField()
    # Add other fields as per your requirements

# Model for Workout Plan Details
class WorkoutPlanDetail(models.Model):
    # Choices for days of the week
    DAYS_OF_WEEK = (
        ('Sunday', 'Sunday'),
        ('Monday', 'Monday'),
        ('Tuesday', 'Tuesday'),
        ('Wednesday', 'Wednesday'),
        ('Thursday', 'Thursday'),
        ('Friday', 'Friday'),
        ('Saturday', 'Saturday'),
    )
    # Foreign key to link WorkoutPlanDetail with WorkoutPlan
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)
    # Day of the week
    day_of_week = models.CharField(max_length=9, choices=DAYS_OF_WEEK)
    # Type of workout
    type_of_workout = models.CharField(max_length=100)
    # List Of Exercises
    exercises = models.TextField()
    # Description of the workout
    description = models.TextField()

class Shipment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=100,blank=True, null=True)
    phone_number = models.CharField(max_length=15)
    flat_block_no = models.CharField(max_length=100)
    pincode = models.CharField(max_length=10)
    address = models.TextField()
    state = models.CharField(max_length=100)
    city_district = models.CharField(max_length=100)
    locality = models.CharField(max_length=100, blank=True, null=True)
    alternate_phone_number = models.CharField(max_length=15, blank=True, null=True)