import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, Navigation, Coffee } from 'lucide-react';

export const EventDetails: React.FC = () => {
  const venueGoogleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Best+Western+Plus+Hotel+Subic+Dewey+Avenue+Subic';
  const venueWazeUrl = 'https://waze.com/ul?q=Best%20Western%20Plus%20Hotel%20Subic';

  return (
    <section className="relative py-12 sm:py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-[#e5b985]/80 font-medium">
          When & Where
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#fce0ad] font-normal tracking-wide mt-2">
          Event Details
        </h2>
        <div className="w-12 h-[1px] bg-[#dfa85f]/40 mx-auto mt-3" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Date & Time Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl glass-card border border-[#dfa85f]/30 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 text-[#fce0ad] mb-4">
              <div className="p-3 rounded-2xl bg-[#360d16] border border-[#dfa85f]/30">
                <Calendar className="w-6 h-6 text-[#fce0ad]" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#d4c3b3]">Date</h3>
                <p className="font-serif text-2xl text-[#fce0ad]">Sunday, October 11, 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#fce0ad] mt-6">
              <div className="p-3 rounded-2xl bg-[#360d16] border border-[#dfa85f]/30">
                <Clock className="w-6 h-6 text-[#fce0ad]" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#d4c3b3]">Time</h3>
                <p className="font-serif text-2xl text-[#fce0ad]">9:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-[#d4c3b3]/80 leading-relaxed">
            Please arrive 10-15 minutes prior to start for seating and welcome drinks.
          </div>
        </motion.div>

        {/* Location & Landmark Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl glass-card border border-[#dfa85f]/30 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-start gap-3 text-[#fce0ad] mb-4">
              <div className="p-3 rounded-2xl bg-[#360d16] border border-[#dfa85f]/30 shrink-0">
                <MapPin className="w-6 h-6 text-[#fce0ad]" />
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-[#d4c3b3]">Venue</h3>
                <p className="font-serif text-xl sm:text-2xl text-[#fce0ad] font-medium leading-snug">
                  Best Western Plus Hotel Subic
                </p>
                <p className="text-sm text-[#d4c3b3] mt-1 font-light">
                  Dewey Avenue, Subic Bay Freeport Zone (Second Floor)
                </p>
              </div>
            </div>

            {/* Landmark Tag */}
            <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#dfa85f]/15 border border-[#dfa85f]/30 text-xs text-[#fce0ad]">
              <Coffee className="w-4 h-4 text-[#dfa85f] shrink-0" />
              <span><strong>Landmark:</strong> Near 727 Coffee</span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
            <a
              href={venueGoogleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#360d16] border border-[#dfa85f]/40 text-xs font-medium uppercase tracking-wider text-[#fce0ad] hover:bg-[#4a121f] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              Google Maps
            </a>
            <a
              href={venueWazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#360d16] border border-[#dfa85f]/40 text-xs font-medium uppercase tracking-wider text-[#fce0ad] hover:bg-[#4a121f] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5" />
              Waze Directions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
