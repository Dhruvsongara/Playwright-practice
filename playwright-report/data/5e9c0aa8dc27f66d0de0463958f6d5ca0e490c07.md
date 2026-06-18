# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FinalAssignmentUnicorn.spec.ts >> Logged-in User flows >> validate airpods search
- Location: tests/FinalAssignmentUnicorn.spec.ts:106:9

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Continue Checkout' })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e7]:
      - text: "Call Now:"
      - link "18002677888" [ref=e8] [cursor=pointer]:
        - /url: tel:18002677888
      - text: "| Free Expert Consultation"
    - navigation [ref=e9]:
      - generic [ref=e10]:
        - link "logo" [ref=e11] [cursor=pointer]:
          - /url: /
          - img "logo" [ref=e12]
        - text:  
        - generic [ref=e13]:
          - list [ref=e14]:
            - listitem [ref=e15]:
              - link "Deals Of The Day" [ref=e16] [cursor=pointer]:
                - /url: /deals-of-day
            - listitem [ref=e17]:
              - link "Hot Deals" [ref=e18] [cursor=pointer]:
                - /url: /hot-deals
            - listitem [ref=e19]:
              - link "Shop " [ref=e20] [cursor=pointer]:
                - /url: javascript:void(0)
                - text: Shop
                - generic [ref=e21]: 
            - listitem [ref=e22]:
              - link "Student Offers" [ref=e23] [cursor=pointer]:
                - /url: /back-to-school
            - listitem [ref=e24]:
              - link "Store Locator" [ref=e25] [cursor=pointer]:
                - /url: /find-store
            - listitem [ref=e26]:
              - link "Support" [ref=e27] [cursor=pointer]:
                - /url: /support
            - listitem [ref=e28]:
              - link "My Account" [ref=e29] [cursor=pointer]:
                - /url: /account
            - listitem [ref=e30]:
              - button "Logout" [ref=e31] [cursor=pointer]
          - list [ref=e32]:
            - listitem [ref=e33]:
              - button " Search" [ref=e34] [cursor=pointer]:
                - generic [ref=e35]: 
                - generic [ref=e36]: Search
            - listitem [ref=e37]:
              - button "" [ref=e38] [cursor=pointer]:
                - generic [ref=e39]: 
  - generic [ref=e43]:
    - generic [ref=e45]:
      - link "Image Not Available AirPods (2nd generation) with MagSafe Charging Case" [ref=e46] [cursor=pointer]:
        - /url: /product/airpods-3rdgeneration1
        - img "Image Not Available" [ref=e49]
        - heading "AirPods (2nd generation) with MagSafe Charging Case" [level=3] [ref=e50]
      - generic [ref=e52]:
        - generic [ref=e53]:
          - generic [ref=e54]: "MRP:"
          - deletion [ref=e56]: ₹15,900.00
        - generic [ref=e57]: ₹11,200.00
      - generic [ref=e59]:
        - button "Add To Cart" [ref=e62] [cursor=pointer]: Add To Cart
        - button "" [ref=e63] [cursor=pointer]:
          - generic [ref=e64]: 
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
    - generic [ref=e68]:
      - link "Image Not Available AirPods Pro (2nd generation) with MagSafe Case (USB‑C)-2023" [ref=e69] [cursor=pointer]:
        - /url: /product/airpods-pro-2nd-generation-with-magsafe-case-usbc-20231
        - img "Image Not Available" [ref=e72]
        - heading "AirPods Pro (2nd generation) with MagSafe Case (USB‑C)-2023" [level=3] [ref=e73]
      - generic [ref=e75]:
        - generic [ref=e76]:
          - generic [ref=e77]: "MRP:"
          - deletion [ref=e79]: ₹23,900.00
        - generic [ref=e80]: ₹21,510.00
      - generic [ref=e82]:
        - button "Add To Cart" [ref=e85] [cursor=pointer]: Add To Cart
        - button "" [ref=e86] [cursor=pointer]:
          - generic [ref=e87]: 
        - button "" [ref=e88] [cursor=pointer]:
          - generic [ref=e89]: 
  - generic [ref=e90]:
    - contentinfo [ref=e91]:
      - generic [ref=e93]:
        - generic [ref=e96]:
          - link "Unicorn Logo" [ref=e99] [cursor=pointer]:
            - /url: /
            - img "Unicorn Logo" [ref=e100]
          - list [ref=e102]:
            - listitem [ref=e103]:
              - link " 1800-2677-888" [ref=e104] [cursor=pointer]:
                - /url: tel:18002677888
                - generic [ref=e105]: 
                - text: 1800-2677-888
            - listitem [ref=e106]:
              - link " +91 8976968438" [ref=e107] [cursor=pointer]:
                - /url: https://wa.me/8976968438
                - generic [ref=e108]: 
                - text: +91 8976968438
            - listitem [ref=e109]:
              - link " sales@uipl.co.in" [ref=e110] [cursor=pointer]:
                - /url: mailto:sales@uipl.co.in
                - generic [ref=e111]: 
                - text: sales@uipl.co.in
            - listitem [ref=e112]:
              - paragraph [ref=e113]: "Mon-Sun: 09:00am - 09:00pm"
            - listitem [ref=e114]:
              - generic [ref=e115]:
                - link "" [ref=e116] [cursor=pointer]:
                  - /url: https://www.facebook.com/profile.php?id=61559042282567
                  - generic [ref=e117]: 
                - link [ref=e118] [cursor=pointer]:
                  - /url: https://x.com/UnicornAPR
                  - img [ref=e119]
                - link "" [ref=e121] [cursor=pointer]:
                  - /url: https://www.instagram.com/unicornapr/
                  - generic [ref=e122]: 
                - link "" [ref=e123] [cursor=pointer]:
                  - /url: https://www.youtube.com/@UnicornAPR
                  - generic [ref=e124]: 
                - link "" [ref=e125] [cursor=pointer]:
                  - /url: https://in.linkedin.com/company/unicorninfosolutions?trk=similar-pages
                  - generic [ref=e126]: 
        - generic [ref=e127]:
          - generic [ref=e128]:
            - heading "Useful Links" [level=4] [ref=e129]
            - list [ref=e130]:
              - listitem [ref=e131]:
                - link "Service Center Pricing" [ref=e132] [cursor=pointer]:
                  - /url: /page/service-center-pricing
              - listitem [ref=e133]:
                - link "About Us" [ref=e134] [cursor=pointer]:
                  - /url: /page/about-us
              - listitem [ref=e135]:
                - link "FAQs" [ref=e136] [cursor=pointer]:
                  - /url: /page/faqs
              - listitem [ref=e137]:
                - link "Cancellation Policy" [ref=e138] [cursor=pointer]:
                  - /url: /page/cancellation-policy
              - listitem [ref=e139]:
                - link "Prebooking Terms and Conditions*" [ref=e140] [cursor=pointer]:
                  - /url: /page/prebooking-terms-and-conditions
              - listitem [ref=e141]:
                - link "Privacy Policy" [ref=e142] [cursor=pointer]:
                  - /url: /page/privacy-policy
              - listitem [ref=e143]:
                - link "Shipping & Delivery Policy (Products)" [ref=e144] [cursor=pointer]:
                  - /url: /page/shipping-delivery-policy-products
              - listitem [ref=e145]:
                - link "Terms and Condition" [ref=e146] [cursor=pointer]:
                  - /url: /page/terms-and-conditions
              - listitem [ref=e147]:
                - link "Website Disclaimer Policy" [ref=e148] [cursor=pointer]:
                  - /url: /page/website-disclaimer-policy
              - listitem [ref=e149]:
                - link "Exchange Terms & Condition" [ref=e150] [cursor=pointer]:
                  - /url: /page/exchange-terms-condition
              - listitem:
                - link:
                  - /url: /page/zoho_form_google
              - listitem [ref=e151]:
                - link "Affordability" [ref=e152] [cursor=pointer]:
                  - /url: /page/affordability
              - listitem [ref=e153]:
                - link "Blog" [ref=e154] [cursor=pointer]:
                  - /url: /blog
          - generic [ref=e155]:
            - heading "Categories" [level=4] [ref=e156]
            - list [ref=e157]:
              - listitem [ref=e158]:
                - link "iPhone" [ref=e159] [cursor=pointer]:
                  - /url: /category/iphone1
              - listitem [ref=e160]:
                - link "Mac" [ref=e161] [cursor=pointer]:
                  - /url: /category/mac
              - listitem [ref=e162]:
                - link "iPad" [ref=e163] [cursor=pointer]:
                  - /url: /category/buy-ipad
              - listitem [ref=e164]:
                - link "Watch" [ref=e165] [cursor=pointer]:
                  - /url: /category/buy-apple-watch
              - listitem [ref=e166]:
                - link "Airpods" [ref=e167] [cursor=pointer]:
                  - /url: /category/buy-airpods
              - listitem [ref=e168]:
                - link "Accessories" [ref=e169] [cursor=pointer]:
                  - /url: /category/buy-apple-accessories
              - listitem [ref=e170]:
                - link "Apple TV" [ref=e171] [cursor=pointer]:
                  - /url: /category/buy-apple-tv
              - listitem [ref=e172]:
                - link "Premium Accessories" [ref=e173] [cursor=pointer]:
                  - /url: /category/premium-apple-accessories
    - generic [ref=e176]:
      - paragraph [ref=e178]: ©2026 Unicorn Info Solutions Pvt Ltd.
      - paragraph [ref=e180]:
        - text: Crafted with
        - generic [ref=e181]: 
        - text: by
        - link "Beaminnovate" [ref=e182] [cursor=pointer]:
          - /url: https://beaminnovate.com
    - button "" [ref=e183] [cursor=pointer]:
      - generic [ref=e184]: 
    - text:      
    - alert [ref=e185]:
      - generic [ref=e187]:
        - generic [ref=e188]:
          - paragraph [ref=e189]: This website uses cookies to ensure you get the best experience on our website.
          - link "Privacy Policy" [ref=e190] [cursor=pointer]:
            - /url: /page/privacy-policy
        - button "Close" [ref=e192] [cursor=pointer]: Accept and Continue
```

# Test source

```ts
  1   | import {Page, Locator, expect} from "@playwright/test";
  2   | 
  3   | export class CartPage{
  4   | 
  5   |     page: Page;
  6   |     cartMessage: Locator;
  7   |     cartButton: Locator;
  8   |     cartVerify: Locator;
  9   |     checkOutButton: Locator;
  10  |     orderPageVerify: Locator;
  11  |     firstNameTextbox: Locator;
  12  |     lastNameTextbox: Locator;
  13  |     emailTextbox: Locator;
  14  |     mobileTextbox: Locator;
  15  |     addressTextbox: Locator;
  16  |     cityTextbox: Locator;
  17  |     pincodeTextbox: Locator;
  18  |     stateDropdown: Locator;
  19  |     continueButton: Locator;
  20  |     checkoutPageVerify: Locator;
  21  |     deliveryRadioButton: Locator;
  22  |     storeSelectionDropdown: Locator;
  23  |     storeOptions: Locator;
  24  |     storeVerify: Locator;
  25  |     finalContinue: Locator;
  26  | 
  27  |     constructor(page:Page){
  28  | 
  29  |         this.page = page;
  30  |         this.cartMessage = page.locator('p-toastitem');
  31  |         this.cartButton = page.getByRole('button', { name: '' });
  32  |         this.cartVerify = page.locator('app-sidebarcart');
  33  |         this.checkOutButton = page.getByRole('button', { name: 'Continue Checkout' });
  34  |         this.orderPageVerify = page.getByRole('heading', { name: 'Order Details' });
  35  |         this.firstNameTextbox = page.locator('input[name="firstname"]');
  36  |         this.lastNameTextbox = page.locator('input[name="lastname"]');
  37  |         this.emailTextbox = page.locator('input[name="email"]');
  38  |         this.mobileTextbox = page.locator('input[name="phone"]');
  39  |         this.addressTextbox = page.locator('input[name="address1"]');
  40  |         this.cityTextbox = page.locator('input[name="city"]');
  41  |         this.pincodeTextbox = page.locator('input[name="zip"]');
  42  |         this.stateDropdown = page.locator("select[name='zone_id']");
  43  |         this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
  44  |         //<button type="submit" _ngcontent-lma-c106="" class="btn btn_continue">Continue</button> aka getByRole('button', { name: 'Continue', exact: true })
  45  |         this.checkoutPageVerify = page.locator('app-checkout');
  46  |         // this.deliveryRadioButton = page.locator('#shipToNearestStore');
  47  |         // this.deliveryRadioButton = page.getByLabel("Ship to your nearest Unicorn store");
  48  |         this.deliveryRadioButton = page.locator('label[for="shipToNearestStore"]');
  49  |         this.storeSelectionDropdown = page.getByRole('button', { name: 'dropdown trigger' });
  50  |         this.storeOptions = page.getByRole('option', { name: 'Gandhinagar' });
  51  |         this.storeVerify = page.locator('address');
  52  |         this.finalContinue = page.getByRole('button', { name: 'Continue' });
  53  |     }
  54  | 
  55  |     async successfulAddtoCartCheck(){
  56  |         await expect(this.cartMessage).toContainText('Product successfully added to cart');
  57  |     }
  58  | 
  59  |     async cartButtonClick(){
  60  |         await this.cartButton.click();
  61  |     }
  62  | 
  63  |     async proceedcheckOut(){
  64  |         // await expect(this.cartVerify).toContainText('iPhone 17e White 512GB');
> 65  |         await this.checkOutButton.click();
      |                                   ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  66  |     }
  67  | 
  68  |     async orderDetailsFillUp(firstName:string, lastName:string, email:string, mobile:string, address:string, city:string, pincode:string, state:string):Promise<void>{
  69  |         await expect(this.orderPageVerify).toBeVisible();
  70  |         await this.firstNameTextbox.click();
  71  |         // await this.firstNameTextbox.fill('Dhruv');
  72  |         await this.firstNameTextbox.fill(firstName);
  73  |         await this.lastNameTextbox.click();
  74  |         // await this.lastNameTextbox.fill('Songara');
  75  |         await this.lastNameTextbox.fill(lastName);
  76  |         await this.emailTextbox.click();
  77  |         // await this.emailTextbox.fill('dhruv123@gmail.com');
  78  |         await this.emailTextbox.fill(email);
  79  |         await this.mobileTextbox.click();
  80  |         // await this.mobileTextbox.fill('9999999999');
  81  |         await this.mobileTextbox.fill(mobile);
  82  |         await this.addressTextbox.click();
  83  |         // await this.addressTextbox.fill('Himatnagar');
  84  |         await this.addressTextbox.fill(address);
  85  |         await this.cityTextbox.click();
  86  |         // await this.cityTextbox.fill('Himatnagar');
  87  |         await this.cityTextbox.fill(city);
  88  |         await this.pincodeTextbox.click();
  89  |         // await this.pincodeTextbox.fill('383001');
  90  |         await this.pincodeTextbox.fill(pincode);
  91  |         // await this.stateDropdown.selectOption('1485');
  92  |         await this.stateDropdown.selectOption(state);
  93  |         await this.continueButton.click();
  94  |     }
  95  | 
  96  |     async finalCheckout(){
  97  |         await expect(this.checkoutPageVerify).toContainText('Billing Address');
  98  |         await this.deliveryRadioButton.click({timeout:30000});
  99  |         await this.storeSelectionDropdown.click();
  100 |         await this.storeOptions.click();
  101 |         await expect(this.storeVerify).toContainText('Gandhinagar');
  102 |         await this.finalContinue.click();
  103 |     }
  104 | }
  105 | 
```