import { errHandler, getSaleNumber } from '../../helper';
import easyinvoice from 'easyinvoice';

export const queryMutations = {
  createInvoice: async (_: any, { input }: any) => {
    
    try {
      const d = new Date();
      const date = `${d.getDay()}/${d.getMonth()}/${d.getFullYear().toString()}`;
      const data = {
        customize: {
          //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html
        },
        images: {
          logo: 'https://cdn.shopify.com/s/files/1/0067/3680/5977/files/pagetop_360x.png?v=1540504609',
          // "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
        },
        sender: {
          company: 'FlexiFix',
          address: 'Danmarksgade 86A',
          zip: '9000',
          city: 'Aalborg',
          country: 'Denmark',
        },
        client: {
          company: input.client.name,
          email: input.client.email,
          address: input.client.address,
          zip: input.client.zipCode,
          city: input.client.city,
        },
        information: {
          number: getSaleNumber(),
          date,
        },
        labour: [{ quantity: 1, description: 'Product 1', 'tax-rate': 25, price: 10 }],
        products: input.products.map(({ amount, product }) => ({
          quantity: amount,
          category: product.category,
          brand: product.brand,
          description: product.description,
          'tax-rate': 25,
          price: product.price,
        })),
        'bottom-notice': 'See you soon ;) -FlexiFix',
        // Settings to customize your invoice
        settings: {
          currency: 'DKK', // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
          // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
          // "tax-notation": "gst", // Defaults to 'vat'
          // "margin-top": 25, // Defaults to '25'
          // "margin-right": 25, // Defaults to '25'
          // "margin-left": 25, // Defaults to '25'
          // "margin-bottom": 25, // Defaults to '25'
          // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
          // "height": "1000px", // allowed units: mm, cm, in, px
          // "width": "500px", // allowed units: mm, cm, in, px
          // "orientation": "landscape", // portrait or landscape, defaults to portrait
        },
        // Translate your invoice to your preferred language
        translate: {
          // "invoice": "FACTUUR",  // Default to 'INVOICE'
          // "number": "Nummer", // Defaults to 'Number'
          // "date": "Datum", // Default to 'Date'
          // "due-date": "Verloopdatum", // Defaults to 'Due Date'
          // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
          // "products": "Producten", // Defaults to 'Products'
          // "quantity": "Aantal", // Default to 'Quantity'
          // "price": "Prijs", // Defaults to 'Price'
          // "product-total": "Totaal", // Defaults to 'Total'
          // "total": "Totaal" // Defaults to 'Total'
        },
      };

      return easyinvoice.createInvoice(data).then(result => result.pdf)
    } catch (err) {
      throw new Error(err);
    }
  },
};
