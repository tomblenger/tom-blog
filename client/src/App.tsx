import { useEffect } from "react";
import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import WorkPage from "./pages/WorkPage";
import InfoPage from "./pages/InfoPage";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <a href="/" className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors">
          Go Home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={WorkPage} />
        <Route path="/info" component={InfoPage} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
