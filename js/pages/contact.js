const GOOGLE_FORM_ID = '1FAIpQLSd497S-AAUDH1TarJCQetLt4YiHpVozHfD4dbVpg4Jsb358JQ';
const ENTRY_IDS = { name: 'entry.537121180', email: 'entry.727807903', phone: 'entry.142400821', reasonMain: 'entry.373929218', reasonOther: 'entry.373929218.other_option_response' };

const form = document.getElementById('contactForm');
const reasonSelect = document.getElementById('reason');
const reasonOtherRow = document.getElementById('reasonOtherRow');
if (reasonSelect && reasonOtherRow) {
  reasonSelect.addEventListener('change', function () { reasonOtherRow.style.display = this.value === 'Other' ? 'block' : 'none'; });
}

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const reason = document.getElementById('reason').value;
    const reasonOther = document.getElementById('reasonOther').value.trim();

    const params = new URLSearchParams();
    params.append('usp', 'pp_url');
    params.append(ENTRY_IDS.name, name);
    params.append(ENTRY_IDS.email, email);
    if (phone) params.append(ENTRY_IDS.phone, phone);
    if (reason.toLowerCase().startsWith('other')) {
      params.append(ENTRY_IDS.reasonMain, 'Other');
      if (reasonOther) params.append(ENTRY_IDS.reasonOther, reasonOther);
    } else {
      params.append(ENTRY_IDS.reasonMain, reason);
    }

    const url = `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/viewform?${params.toString()}`;
    window.open(url, '_blank');
  });
}
