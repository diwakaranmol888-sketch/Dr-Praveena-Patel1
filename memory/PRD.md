# Product Requirements Document (PRD)
## Dr. Pravina Patel - Professional Dermatology Website

**Last Updated:** December 2025

---

## 1. Original Problem Statement

Build a professional website for Dr. Pravina Patel, a dermatologist in Unnao, based on the reference website (dranimeshgupta.com). The website should showcase her expertise, services, and facilitate patient appointments.

---

## 2. User Personas

### Primary Users:
- **Patients**: Seeking dermatology consultations and treatments in Unnao
- **Potential Patients**: Researching dermatologists and services online
- **Existing Patients**: Looking for contact information and appointment booking

---

## 3. Core Requirements

### Doctor Information:
- Name: Dr. Pravina Patel
- Specialty: Dermatologist
- Qualifications: MBBS, Diploma in Dermatology
- Experience: 14 Years Overall (9 years as specialist)
- Location: H no. 790, Gandhi Nagar, Lok Nagar, Unnao, Uttar Pradesh 209801
- Contact: 09264951091, 08401268642

### Key Services (12 Main Treatments):
1. Acne / Pimples Treatment
2. Hair Loss Treatment
3. Skin Care & Treatment
4. Anti Aging Treatment
5. Laser Hair Removal
6. Acne Scar Treatment
7. Mole & Wart Removal
8. Psoriasis Treatment
9. Eczema Treatment
10. Vitiligo Treatment
11. Botox & Fillers
12. Chemical Peel

---

## 4. What's Been Implemented

### ✅ Phase 1: Frontend with Mock Data (December 2025)

**Components Created:**
- Header with responsive navigation and mobile menu
- Hero Section with doctor profile and CTA buttons
- Highlights Section showing key features (4 cards)
- Services Section with 12 treatment cards in 3-column grid
- About Section with doctor bio and stats
- Testimonials Section with patient reviews
- Appointment Section with contact form and information
- Footer with complete contact details and quick links

**Features:**
- Fully responsive design (mobile, tablet, desktop)
- Smooth scroll navigation
- Interactive hover effects and animations
- Professional teal/blue color scheme
- Contact form with toast notifications (frontend only)
- All data from mockData.js file

**Tech Stack:**
- React 19
- Tailwind CSS
- Shadcn UI components
- Lucide React icons
- Sonner for toast notifications

---

## 5. API Contracts (For Future Backend Integration)

### Endpoints to Implement:

#### 1. POST /api/appointments
**Request:**
```json
{
  "name": "string",
  "phone": "string",
  "email": "string (optional)",
  "service": "string (optional)",
  "message": "string (optional)"
}
```
**Response:**
```json
{
  "success": true,
  "appointmentId": "string",
  "message": "Appointment request received"
}
```

#### 2. GET /api/services
**Response:**
```json
{
  "services": [
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "image": "string"
    }
  ]
}
```

#### 3. GET /api/testimonials
**Response:**
```json
{
  "testimonials": [
    {
      "id": "number",
      "name": "string",
      "rating": "number",
      "text": "string"
    }
  ]
}
```

---

## 6. Mocked Data

**File:** `/app/frontend/src/data/mockData.js`

**Contains:**
- Doctor information (name, qualifications, experience, bio)
- Contact information (address, phones, email)
- Highlights/features (4 items)
- Services list (12 treatments)
- Testimonials (3 reviews)
- Stats (patients, rating, experience)

---

## 7. Prioritized Backlog

### P0 (Must Have - Backend Phase):
- [ ] Backend API implementation
- [ ] MongoDB models for appointments
- [ ] Email notification system for appointment requests
- [ ] Contact form backend integration
- [ ] Admin panel for appointment management

### P1 (Should Have):
- [ ] WhatsApp integration for quick appointments
- [ ] Google Maps integration for clinic location
- [ ] Image gallery for before/after treatment results
- [ ] Blog section for skin care tips
- [ ] SEO optimization

### P2 (Nice to Have):
- [ ] Patient portal for appointment history
- [ ] Online payment integration
- [ ] Live chat support
- [ ] Multi-language support (Hindi/English)
- [ ] Dark mode

---

## 8. Next Tasks

1. Get user approval for frontend design and content
2. Implement backend API endpoints
3. Integrate appointment form with backend
4. Set up email notifications
5. Testing (frontend + backend integration)
6. Deployment preparation

---

## 9. Notes

- All images currently use external URLs (Unsplash/Pexels and user-provided profile image)
- Form submissions currently show toast notifications only
- Mobile menu fully functional
- Smooth scroll navigation working across all sections
- Professional medical color scheme (teal/blue) chosen for trust and cleanliness

