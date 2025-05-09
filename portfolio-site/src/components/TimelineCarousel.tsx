import React, { useRef, useState } from 'react';
import { ToggleButton, Button, Carousel } from 'react-bootstrap';

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  icon: string;
}

interface TimelineCarouselProps {
  timelineEvents: TimelineEvent[];
}

export const TimelineCarousel: React.FC<TimelineCarouselProps> = ({ timelineEvents }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);


  const handleSelect = (selectedIndex: number, element?: HTMLElement) => {
    setActiveIndex(selectedIndex);
  };

  

  return (
    <>
      <div className="d-flex align-items-center">
          <div className="d-flex flex-nowrap">
            {timelineEvents.map((event, index) => (
              <ToggleButton
                key={index}
                id={`timeline-${index}`}
                type="radio"
                variant="outline-light"
                name="timeline"
                value={String(index)}
                className={`me-2 ms-2 border-0 ${activeIndex === index ? 'btn-pink-active' : ''}`}
                checked={activeIndex === index}
                onChange={(e) => {
                  const newIndex = Number(e.currentTarget.value);
                  setActiveIndex(newIndex);
                }}
              >
                {event.date}
              </ToggleButton>
            ))}
          </div>
      </div>

      <Carousel
        className="p-1 w-100 w-md-50 mx-auto pb-md-5"
        activeIndex={activeIndex}
        onSelect={(idx) => handleSelect(Number(idx))}
        indicators={false}
        interval={null}
        variant="dark"
      >
        {timelineEvents.map((event, idx) => (
          <Carousel.Item key={idx}>
            <div className="p-5 text-light text-center d-flex flex-column justify-content-center align-items-center" id='carousel-item'>
              <i className={`bi ${event.icon} fs-1 mb-3 text-purple`}></i>
              <h3 className="text-purple">{event.title}</h3>
              <p className="text-secondary">{event.date}</p>
              <p>{event.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};