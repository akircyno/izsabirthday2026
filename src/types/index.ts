export interface RSVPData {
  id?: string;
  fullName: string;
  attending: 'yes' | 'no';
  guestCount: number;
  additionalGuests?: string[];
  dietaryRestrictions?: string;
  birthdayWish?: string;
  submittedAt?: string;
}

export interface GuestWish {
  id: string;
  name: string;
  message: string;
  date: string;
}

