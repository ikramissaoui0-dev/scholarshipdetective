interface ContactFormData {
  prenom: string;
  nom: string;
  email: string;
  telephone?: string;
  destination: string;
  niveauEtudes: string;
  filieresSouhaitee: string;
  niveauAnglais?: string;
  budgetMensuel?: string;
  anneeDepart: string;
  message?: string;
}

export function buildAdminEmailHtml(data: ContactFormData): string {
  const rows = [
    ['Destination souhaitée', data.destination],
    ['Prénom', data.prenom],
    ['Nom', data.nom],
    ['Email', data.email],
    ['Téléphone', data.telephone || 'Non renseigné'],
    ["Niveau d'études", data.niveauEtudes],
    ['Filière souhaitée', data.filieresSouhaitee],
    ["Niveau d'anglais", data.niveauAnglais || 'Non renseigné'],
    ['Budget mensuel', data.budgetMensuel || 'Non renseigné'],
    ['Année de départ', data.anneeDepart],
    ['Message', data.message || 'Aucun message'],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding: 10px 16px; background: #f8f9fa; font-weight: 600; color: #1A3A8F; border-bottom: 1px solid #e5e7eb; width: 40%; white-space: nowrap;">${label}</td>
        <td style="padding: 10px 16px; color: #555555; border-bottom: 1px solid #e5e7eb;">${value}</td>
      </tr>`
    )
    .join('');

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: Arial, sans-serif; background: #f0f4ff; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #1A3A8F 0%, #0D1F5C 100%); padding: 28px 32px;">
      <h1 style="color: white; margin: 0; font-size: 22px;">Nouvelle Demande d'Orientation</h1>
      <p style="color: rgba(255,255,255,0.7); margin: 6px 0 0 0; font-size: 14px;">Scholarship Detective — ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
    <div style="padding: 24px 32px;">
      <p style="color: #555555; margin-bottom: 20px;">Une nouvelle demande a été reçue via le formulaire du site :</p>
      <table style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
        ${tableRows}
      </table>
      <div style="margin-top: 24px; padding: 16px; background: #FFF8ED; border-left: 4px solid #E8931A; border-radius: 4px;">
        <p style="color: #555555; margin: 0; font-size: 14px;">
          <strong style="color: #E8931A;">Action requise :</strong> Contacter l'étudiant sous 24h à l'adresse
          <a href="mailto:${data.email}" style="color: #1A3A8F; font-weight: 600;">${data.email}</a>
          ${data.telephone ? ` ou au ${data.telephone}` : ''}.
        </p>
      </div>
    </div>
    <div style="padding: 16px 32px; background: #f8f9fa; text-align: center; color: #999; font-size: 12px;">
      Scholarship Detective • secretariat@scholarshipdetective.fr
    </div>
  </div>
</body>
</html>`;
}

export function buildConfirmationEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="font-family: Arial, sans-serif; background: #f0f4ff; margin: 0; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
    <div style="background: linear-gradient(135deg, #1A3A8F 0%, #0D1F5C 100%); padding: 28px 32px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px;">Votre demande a bien été reçue !</h1>
      <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0 0; font-size: 15px;">Scholarship Detective</p>
    </div>
    <div style="padding: 32px;">
      <p style="color: #555555; font-size: 16px; line-height: 1.6;">
        Bonjour <strong style="color: #1A3A8F;">${data.prenom}</strong>,
      </p>
      <p style="color: #555555; font-size: 15px; line-height: 1.7;">
        Nous avons bien reçu votre demande d'orientation. Notre équipe d'experts va analyser votre profil et vous recontactera <strong>sous 24h ouvrées</strong>.
      </p>
      <div style="background: #EEF3FF; border-radius: 12px; padding: 20px; margin: 24px 0;">
        <p style="color: #1A3A8F; font-weight: 600; margin: 0 0 12px 0; font-size: 15px;">📋 Récapitulatif de votre demande :</p>
        <ul style="color: #555555; margin: 0; padding-left: 20px; font-size: 14px; line-height: 2;">
          <li>Destination souhaitée : <strong>${data.destination}</strong></li>
          <li>Niveau d'études : <strong>${data.niveauEtudes}</strong></li>
          <li>Filière souhaitée : <strong>${data.filieresSouhaitee}</strong></li>
          <li>Année de départ : <strong>${data.anneeDepart}</strong></li>
        </ul>
      </div>
      <p style="color: #555555; font-size: 14px; line-height: 1.6;">
        En attendant, n'hésitez pas à explorer notre site pour en savoir plus sur les universités partenaires et les bourses disponibles.
      </p>
      <div style="text-align: center; margin: 28px 0;">
        <a href="https://scholarshipdetective.fr" style="display: inline-block; background: #E8931A; color: white; font-weight: 700; padding: 14px 32px; border-radius: 10px; text-decoration: none; font-size: 16px;">
          Visiter notre site →
        </a>
      </div>
    </div>
    <div style="padding: 20px 32px; background: #1A1A2E; text-align: center;">
      <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 0;">
        © 2025 Scholarship Detective • <a href="mailto:secretariat@scholarshipdetective.fr" style="color: #E8931A;">secretariat@scholarshipdetective.fr</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}
