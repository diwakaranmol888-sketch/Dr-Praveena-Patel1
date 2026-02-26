from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
import uuid


# Appointment Models
class AppointmentCreate(BaseModel):
    name: str
    phone: str
    email: Optional[str] = ""
    service: Optional[str] = ""
    message: Optional[str] = ""


class Appointment(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: Optional[str] = ""
    service: Optional[str] = ""
    message: Optional[str] = ""
    status: str = "pending"  # pending, confirmed, completed, cancelled
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "Priya Sharma",
                "phone": "9876543210",
                "email": "priya@example.com",
                "service": "Acne Treatment",
                "message": "I need consultation for acne problem"
            }
        }


# Service Models
class ServiceCreate(BaseModel):
    title: str
    description: str
    image: str


class Service(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    image: str
    created_at: datetime = Field(default_factory=datetime.utcnow)


# Testimonial Models
class TestimonialCreate(BaseModel):
    name: str
    rating: int = Field(ge=1, le=5)
    text: str


class Testimonial(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    rating: int = Field(ge=1, le=5)
    text: str
    created_at: datetime = Field(default_factory=datetime.utcnow)


# Response Models
class AppointmentResponse(BaseModel):
    success: bool
    appointment_id: str
    message: str


class ServicesResponse(BaseModel):
    success: bool
    count: int
    services: List[Service]


class TestimonialsResponse(BaseModel):
    success: bool
    count: int
    testimonials: List[Testimonial]


class AppointmentsListResponse(BaseModel):
    success: bool
    count: int
    appointments: List[Appointment]
