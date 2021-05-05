interface faqList {
  q: string;
  a: string;
}

const faqList = [
  {
    q: 'What exactly does a Pass allow me to do?',
    a:
      'A bakalo Pass allows you to bypass typing a CAPTCHA verification when posting and reporting posts on the bakalo image and discussion boards. bakalo Pass users have reduced post cooldown timers. bakalo Passes also bypass IP range and country blocks.'
  },
  {
    q: 'What does not a Pass allow me to do?',
    a:
      'A Pass does not confer any additional privileges beyond bypassing the CAPTCHA verification. You will still be subject to various post timers and must comply with the Rules of bakalo.'
  },
  {
    q: 'Will other people know I am using a Pass?',
    a:
      'No. Unless you enter since 4pass in the Options field, there will be no indication that you are using a Pass to other users, and your posts will display exactly the same as any other. The since4pass Options command allows you to publicly display since when you have been using a bakalo Pass.'
  },
  {
    q: 'How will I receive and use my Pass?',
    a:
      'Passes may be used on multiple devices (computers, tablets, phones, etc), but can only be associated with one IP address at a time. For customers with dynamic IP addresses or who wish to use their Pass while on the move, you may update this IP address by re-authenticating from a new IP (currently limited to once every 30 minutes, subject to change). Note this is done automatically on devices that have already been authorized and are cookied.'
  },
  {
    q: 'Can I use my Pass on multiple devices?',
    a:
      'Passes may be used on multiple devices (computers, tablets, phones, etc), but can only be associated with one IP address at a time. For customers with dynamic IP addresses or who wish to use their Pass while on the move, you may update this IP address by re-authenticating from a new IP (currently limited to once every 30 minutes, subject to change). Note this is done automatically on devices that have already been authorized and are cookied.'
  },
  {
    q: 'I cannot post because my ISP, IP range, or country is blocked—can I use a Bakalo Pass?',
    a:
      'Yes. bakalo Pass users may bypass ISP, IP range, and country blocks, but are still subject to the same rules and restrictions as any other user. Pass users cannot bypass individual (regular) IP bans. Do not know the difference? ISP, IP range, and country blocks display red "Error" messages when attempting to post (these can be bypassed with a bakalo Pass), whereas individual IP bans redirect you to www.bakalo.org/banned (these cannot be bypassed with a 4chan Pass).'
  },
  {
    q: 'Do you store payment information on your servers?',
    a:
      'No. All payment information is stored securely by our PCI-certified payment provider. More information is available here.'
  }
];

export default faqList;
