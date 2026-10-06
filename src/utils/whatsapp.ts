import { Product } from '../types/product';

export const WHATSAPP_NUMBER = '917200191827';
export const WHATSAPP_DISPLAY = '+91 72001 91827';
export const INSTAGRAM_HANDLE = '@tutyticks_watch';
export const INSTAGRAM_URL = 'https://www.instagram.com/tutyticks_watch/';

/**
 * Creates a direct WhatsApp link for general inquiries
 */
export function getGeneralWhatsAppUrl(
  message = "Hi TUTYTICKS, I'm interested in ordering a watch. Please share the available options."
): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a direct WhatsApp link for ordering a specific watch
 */
export function getProductWhatsAppUrl(product: Product): string {
  const message = `Hi TUTYTICKS, I'm interested in ordering ${product.name} (${product.number}, ₹${product.price}). Please share the delivery details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
