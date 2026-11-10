import type { Metadata } from "next";
import Onboarding from "./Onboarding";
import "./onboarding.css";

export const metadata: Metadata = {
  title: "Get your business number | Onboarding",
  description: "Create your dashboard, pick your number and get ready for your first business call.",
};

export default function OnboardingPage() {
  return <Onboarding />;
}
