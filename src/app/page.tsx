"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <main className="min-h-screen">
        <div id="footer" data-section="footer">
          <footer className="bg-gray-800 py-6 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex-1 text-center">
                  <p className="text-sm text-gray-300">
                    Copyright © 2021 Your Company. All rights reserved.
                  </p>
                </div>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of service
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </ThemeProvider>
  );
}