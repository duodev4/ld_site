import type { LucideIcon } from "lucide-react";
import {
  GraduationCap,
  HeartPulse,
  Rocket,
  ShoppingCart,
} from "lucide-react";

import type { ProjectType } from "@/lib/demo-config";

export type LiveDemoSystem = {
  id: ProjectType;
  cardTitle: string;
  cardBullets: [string, string, string];
  cardAccentText: string;
  cardAccentBg: string;
  cardAccentBorder: string;
  modalTitle: string;
  modalDescription: string;
  keyPoints: [string, string, string];
  useCaseTags: [string, string, string];
  actions?: [string, string, string];
  icon: LucideIcon;
  primaryColor: string;
  tintColor: string;
};

export const liveDemoSystems: LiveDemoSystem[] = [
  {
    id: "supermarket-system",
    cardTitle: "Retail Ops",
    cardBullets: ["Inventory management", "POS system", "Supermarket operations"],
    cardAccentText: "text-sky-700",
    cardAccentBg: "bg-sky-50",
    cardAccentBorder: "border-sky-100",
    modalTitle: "Inventory Management System",
    modalDescription: "Manage stock, sales, and product availability across retail and warehouse systems.",
    keyPoints: [
      "Track stock levels in real time.",
      "Sync POS sales with inventory instantly.",
      "Get low-stock alerts before shortages happen.",
    ],
    useCaseTags: ["Supermarket", "Retail shop", "Inventory system"],
    actions: ["Add product", "Check stock", "Generate report"],
    icon: ShoppingCart,
    primaryColor: "#3B82F6",
    tintColor: "#EFF6FF",
  },
  {
    id: "hospital-system",
    cardTitle: "Healthcare Ops",
    cardBullets: ["Clinic management", "Hospital system", "Pharmacy flow"],
    cardAccentText: "text-emerald-700",
    cardAccentBg: "bg-emerald-50",
    cardAccentBorder: "border-emerald-100",
    modalTitle: "Healthcare Management System",
    modalDescription: "Organize patient flow, appointments, and care operations in one clean workspace.",
    keyPoints: [
      "Keep patient records easy to access.",
      "Manage appointment flow without friction.",
      "Coordinate clinic and pharmacy operations clearly.",
    ],
    useCaseTags: ["Hospital", "Clinic", "Pharmacy"],
    actions: ["Add patient", "Book appointment", "Review records"],
    icon: HeartPulse,
    primaryColor: "#22C55E",
    tintColor: "#ECFDF5",
  },
  {
    id: "school-system",
    cardTitle: "Education Ops",
    cardBullets: ["School management", "University system", "Academy tracking"],
    cardAccentText: "text-violet-700",
    cardAccentBg: "bg-violet-50",
    cardAccentBorder: "border-violet-100",
    modalTitle: "Education Management System",
    modalDescription: "Run attendance, student operations, and scheduling for modern learning institutions.",
    keyPoints: [
      "Manage students and classes in one place.",
      "Track attendance with less manual effort.",
      "Keep schedules clear for staff and learners.",
    ],
    useCaseTags: ["School", "University", "Academy"],
    actions: ["Add student", "Take attendance", "Update schedule"],
    icon: GraduationCap,
    primaryColor: "#6366F1",
    tintColor: "#EEF2FF",
  },
  {
    id: "business-website",
    cardTitle: "Online Suite",
    cardBullets: ["Website creation", "Domain purchase", "Professional email"],
    cardAccentText: "text-cyan-700",
    cardAccentBg: "bg-cyan-50",
    cardAccentBorder: "border-cyan-100",
    modalTitle: "Online Suite — Websites, Domains & Email",
    modalDescription: "Everything your business needs to exist online: a built website, your own domain, and professional email.",
    keyPoints: [
      "We design and build your business website.",
      "Purchase a domain that matches your business name.",
      "Set up professional email on your own domain.",
    ],
    useCaseTags: ["Website creation", "Domain purchase", "Email setup"],
    actions: ["Build website", "Buy domain", "Setup email"],
    icon: Rocket,
    primaryColor: "#F97316",
    tintColor: "#FFF7ED",
  },
];

export function getLiveDemoSystem(id: ProjectType) {
  return liveDemoSystems.find((system) => system.id === id) ?? liveDemoSystems[0];
}
