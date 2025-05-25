import { apiClient } from './apiClient';

export class MonolithicService {
  async processOrder(orderId: string) {
    // Fetch order
    const order = await apiClient.get(`/orders/${orderId}`);
    // Validate order
    if (!order.data) throw new Error('Order not found');
    // Process payment
    const payment = await apiClient.post('/payments', { orderId });
    // Send confirmation email
    this.sendEmail(order.data.customerEmail, 'Order Confirmed');
    // Log audit
    this.logAudit(orderId, 'processed');
    return { order: order.data, payment: payment.data };
  }

  sendEmail(email: string, subject: string) {
    // Simulate email sending
    console.log(`Sending email to ${email}: ${subject}`);
  }

  logAudit(id: string, action: string) {
    console.log(`Audit log - Order ${id}: ${action}`);
  }
}