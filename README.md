# Fortaleza Tourist Guide | Premium Mobile Guide

The ultimate mobile tourism experience for Fortaleza, Ceará. This application is designed specifically for mobile devices with a high-end "HUD" aesthetic.

## 📱 How to test on your phone

Since this project is running in a cloud environment, you can access it directly on your mobile device:

1. **Start the Dev Server**: Ensure the terminal is running `npm run dev`.
2. **Open Web Preview**: Click the **Web Preview** button in the top right of your workspace.
3. **Share the Link**: Copy the URL of the preview tab.
4. **Access on Mobile**: Send this URL to your phone (via email, messaging, or a QR code generator).
5. **Install as App**: Open the link on your phone and select **"Add to Home Screen"** in your browser menu (Safari on iOS or Chrome on Android) for the full-screen premium experience.

## 📦 Direct App Downloads

To enable direct downloads for Android (APK) and iOS (IPA):

1. Create a folder named `public/downloads/` in the root of the project.
2. Upload your `fortaleza-guide.apk` file to this folder.
3. Upload your `fortaleza-guide.ipa` file to this folder.

The app is configured to fetch these files directly from those paths.

## ✨ Key Features

- **Interactive Map HUD**: Explore Fortaleza with an embedded, dark-themed interactive map.
- **AI Itinerary Planner**: Get a custom schedule based on your interests and available time.
- **AI Personal Concierge**: Chat with a local AI expert for personalized dining and attraction tips.
- **Multilingual Content**: Full support for English, Portuguese, Spanish, and French.
- **Gastronomy Guide**: A dedicated section for the best restaurants in the city.
- **Hotels Guide**: A dedicated section for premium stays in the city.
- **Offline Favorites**: Save your must-visit spots locally.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **AI Engine**: Genkit + Gemini 2.5 Flash
- **Styling**: Tailwind CSS + ShadCN UI
- **Maps**: Leaflet (React Leaflet)
- **State**: Custom Zustand-like store with LocalStorage persistence