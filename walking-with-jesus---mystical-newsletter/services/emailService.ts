// Email Service Integration
// This file provides multiple email service integrations
// Set your preferred service in .env.local

export interface EmailServiceConfig {
  provider: 'convertkit' | 'mailchimp' | 'beehiiv' | 'custom';
  apiKey?: string;
  formId?: string;
  listId?: string;
  apiUrl?: string;
}

export interface SubscribeResponse {
  success: boolean;
  message: string;
  error?: string;
}

// ConvertKit Integration
const subscribeConvertKit = async (email: string, config: EmailServiceConfig): Promise<SubscribeResponse> => {
  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${config.formId}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: config.apiKey,
        email: email,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.',
      };
    } else {
      return {
        success: false,
        message: 'Subscription failed. Please try again.',
        error: data.message || 'Unknown error',
      };
    }
  } catch (error) {
    console.error('ConvertKit subscription error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

// Mailchimp Integration
const subscribeMailchimp = async (email: string, config: EmailServiceConfig): Promise<SubscribeResponse> => {
  try {
    // Note: Direct Mailchimp API calls from frontend are not recommended due to CORS
    // You should use a serverless function or backend proxy
    const response = await fetch(config.apiUrl || '/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listId: config.listId,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.',
      };
    } else {
      return {
        success: false,
        message: 'Subscription failed. Please try again.',
        error: data.message || 'Unknown error',
      };
    }
  } catch (error) {
    console.error('Mailchimp subscription error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

// Beehiiv Integration
const subscribeBeehiiv = async (email: string, config: EmailServiceConfig): Promise<SubscribeResponse> => {
  try {
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${config.listId}/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: false,
        send_welcome_email: true,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.',
      };
    } else {
      return {
        success: false,
        message: 'Subscription failed. Please try again.',
        error: data.message || 'Unknown error',
      };
    }
  } catch (error) {
    console.error('Beehiiv subscription error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

// Custom API Integration
const subscribeCustom = async (email: string, config: EmailServiceConfig): Promise<SubscribeResponse> => {
  try {
    const response = await fetch(config.apiUrl || '/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      return {
        success: true,
        message: 'Successfully subscribed! Check your email for confirmation.',
      };
    } else {
      return {
        success: false,
        message: 'Subscription failed. Please try again.',
        error: data.message || 'Unknown error',
      };
    }
  } catch (error) {
    console.error('Custom API subscription error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

// Main subscribe function
export const subscribeToNewsletter = async (email: string): Promise<SubscribeResponse> => {
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
      error: 'Invalid email format',
    };
  }

  // Get config from environment variables
  const config: EmailServiceConfig = {
    provider: (import.meta.env.VITE_EMAIL_PROVIDER || 'custom') as EmailServiceConfig['provider'],
    apiKey: import.meta.env.VITE_EMAIL_API_KEY,
    formId: import.meta.env.VITE_EMAIL_FORM_ID,
    listId: import.meta.env.VITE_EMAIL_LIST_ID,
    apiUrl: import.meta.env.VITE_EMAIL_API_URL,
  };

  // If no provider configured, simulate success for demo purposes
  if (!config.apiKey && !config.apiUrl) {
    console.warn('No email service configured. Simulating success for demo.');
    
    // Track to analytics if available
    if (window.gtag) {
      window.gtag('event', 'newsletter_signup', {
        event_category: 'engagement',
        event_label: 'demo_mode',
      });
    }
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Successfully subscribed! (Demo mode - configure email service in production)',
        });
      }, 1500);
    });
  }

  // Track attempt to analytics
  if (window.gtag) {
    window.gtag('event', 'newsletter_signup_attempt', {
      event_category: 'engagement',
    });
  }

  // Route to appropriate service
  let result: SubscribeResponse;
  
  switch (config.provider) {
    case 'convertkit':
      result = await subscribeConvertKit(email, config);
      break;
    case 'mailchimp':
      result = await subscribeMailchimp(email, config);
      break;
    case 'beehiiv':
      result = await subscribeBeehiiv(email, config);
      break;
    case 'custom':
    default:
      result = await subscribeCustom(email, config);
      break;
  }

  // Track success to analytics
  if (result.success && window.gtag) {
    window.gtag('event', 'newsletter_signup', {
      event_category: 'conversion',
      event_label: config.provider,
    });
  }

  return result;
};

// Type augmentation for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
