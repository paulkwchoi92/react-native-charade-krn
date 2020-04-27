onSubmit = async formValues => {
  _logger(formValues);
  let arrayValues;
  if (formValues.category === '1') {
    arrayValues = await formValues.orgs.map(
      org =>
        (org = {
          organizationId: parseInt(org),
          email: formValues.email,
        }),
    );

    userOrganizationService.updateAllEmails();
  } else if (formValues.category === '2') {
    formValues.orgs.forEach(org => {
      arrayValues.push({
        organizationId: parseInt(org),
        phoneNumber: formValues.phone,
      });
    });
    userOrganizationService.updateAllPhones();
  } else if (formValues.category === '3') {
    formValues.orgs.forEach(org => {
      arrayValues.push({
        organizationId: parseInt(org),
        locationId: parseInt(formValues.address),
      });
    });
    userOrganizationService.updateAllLocations();
  } else if (formValues.category === '4') {
    formValues.orgs.forEach(org => {
      arrayValues.push({
        organizationId: parseInt(org),
        paymentId: parseInt(formValues.payment),
      });
    });
    userOrganizationService.updateAllPayments();
  }
};
