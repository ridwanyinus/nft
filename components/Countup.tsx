"use client";

import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "waypoints/lib/noframework.waypoints.js";

interface CountUpProps {
  time?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const CountUp: React.FC<CountUpProps> = ({ time = 2000, delay = 10, children, className }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !elementRef.current) return;

    const element = $(elementRef.current);
    const countUp = () => {
      const counterupTo = element.data("counterupTo") || element.text();
      element.data("counterupTo", counterupTo);
      const totalTime = parseInt(element.data("counter-time")) > 0 ? parseInt(element.data("counter-time")) : time;
      const totalDelay = parseInt(element.data("counter-delay")) > 0 ? parseInt(element.data("counter-delay")) : delay;
      const steps = totalTime / totalDelay;

      const regex = /(\d[\d,]*\.?\d*)(\D*)/;
      const match = counterupTo.match(regex);

      if (!match) return;

      const targetValue = parseFloat(match[1].replace(/,/g, ""));
      const suffix = match[2];
      const decimalPlaces = (match[1].split(".")[1] || []).length;
      const values = [targetValue];

      for (let i = steps; i >= 1; i--) {
        let value = parseFloat(((targetValue / steps) * i).toFixed(decimalPlaces));
        values.unshift(value);
      }

      element.data("counterup-nums", values);
      element.text("0");

      const updateCounter = () => {
        const nums = element.data("counterup-nums");
        if (nums && nums.length) {
          const currentValue = nums.shift();
          if (currentValue !== undefined) {
            let formattedValue = currentValue.toLocaleString(undefined, {
              minimumFractionDigits: decimalPlaces,
              maximumFractionDigits: decimalPlaces,
            });

            element.text(formattedValue + suffix);
          }
          if (nums.length) {
            setTimeout(updateCounter, totalDelay);
          } else {
            element.data("counterup-nums", null);
          }
        }
      };

      setTimeout(updateCounter, totalDelay);
    };

    const waypoint = new (window as any).Waypoint({
      element: elementRef.current,
      handler: countUp,
      offset: "100%",
      triggerOnce: true,
    });

    return () => waypoint.destroy();
  }, [time, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default CountUp;
