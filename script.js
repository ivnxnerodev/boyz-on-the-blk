const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxDownload = document.getElementById("lightboxDownload");
const lightboxClose = document.getElementById("lightboxClose");

const images = [
  "0c6a1d80-48e7-4e46-8446-7d59cb0e0c6d.jpg",
  "0c328372-c83e-439a-b974-b4d9ea2868dc.jpg",
  "0d3e5214-c9a3-41b0-8a93-332df49b5ae4.jpg",
  "1beeaf44-b65a-4bbe-8cb1-6653b573ae98.jpg",
  "1e33d4e8-5f8b-42df-bdcc-c9792101ae72.jpg",
  "1efc4713-41e8-44c6-9908-df94eb48ce0a.jpg",
  "1ff8d44d-0cc7-467f-bc3a-7b5242fb8b75.jpg",
  "2b0057ed-df95-4636-87b1-c2f13afd73f8.jpg",
  "2bf8c939-544e-43f5-9aef-ad588dfdf387.jpg",
  "2ef2a274-ab75-4a57-953f-21771f52fad0.jpg",
  "3b01bec7-0420-4c9d-adb0-4a905f477996.jpg",
  "4a4a32a6-6cd2-4f06-9937-cda85761eef9.jpg",
  "4a31bc87-8b27-4084-9a25-c7d1b98fac2f.jpg",
  "4c8d4ee3-2911-4d6a-9575-a83884ef4ad3.jpg",
  "04efd373-70ee-4a1a-a1cd-90b0df8a3dcd.jpg",
  "5b3f8308-a783-4cda-b650-faeb1aefd876.jpg",
  "5b5e6cef-4bf8-4b0f-961f-fa63df648b97.jpg",
  "5c59e2c8-a8bb-40b1-b54b-128d0a0800c0.jpg",
  "5f9804d6-9ba8-4782-926a-7a1be77e287b.jpg",
  "6a7f4ea5-d021-40cb-980a-8c921721dabf.jpg",
  "6a89bf3d-fafa-42b0-b83d-ca58765df5e3.jpg",
  "6eb2ba33-e2f1-40a1-b0d9-7325dbae2e85.jpg",
  "7bd242b9-815d-4fff-948b-56a744480e74.jpg",
  "7e28bd12-9670-4fff-989d-6ce824d19e0f.jpg",
  "7fbb6701-49dd-40f8-9db2-e66e0403a2b3.jpg",
  "7fd3ecae-f089-4e20-a553-9d01cd668f32.jpg",
  "7fe35b39-ae4f-496d-8a1b-7942eb8639df.jpg",
  "8c63016c-6e31-41d3-b17a-32f5bb506758.jpg",
  "8f1975f8-b086-48b7-8f15-1990c24275a6.jpg",
  "8faa1857-d9fd-4aaf-91b9-b212153a23f4.jpg",
  "9de89fd9-405d-44ef-9c6e-5c3bc2bf8de4.jpg",
  "23b62148-79fb-4e3d-b1a7-894397711bb7.jpg",
  "25f37954-f755-44b5-852c-b105f1b26629.jpg",
  "26c02f6a-179c-4b5c-bc30-b0c3f665570d.jpg",
  "32b437db-ce8e-43bb-a8b9-607357c0c837.jpg",
  "37aef821-c0e8-409c-9eda-0a3476f456b4.jpg",
  "39d9a635-5541-4bd9-ab8c-3cacc2d4582c.jpg",
  "41aac799-790b-40a3-a490-aed8cc4959ba.jpg",
  "44f16f65-8de0-4957-85a0-6f5a0eab64fc.jpg",
  "45a336a0-b5de-4eac-b5d2-03e40ab97318e.jpg",
  "50d9bdf0-c334-4c35-bae7-066892f81bd2.jpg",
  "57c4479b-d214-4e3c-9766-b23c28592c74.jpg",
  "72bf0ddd-8373-42fb-8618-44611c80cf3e.jpg",
  "73f8c958-410a-4e8d-81e1-819ccbdf994c.jpg",
  "79b6128b-eaa6-49b3-90c5-797717c69674.jpg",
  "80ad1287-7f2e-4994-bb79-576c0cd1ed78.jpg",
  "82b51d25-3a58-4a21-8924-1c8422116959.jpg",
  "90fff8e7-9210-42ec-aac2-4407c3ebc846.jpg",
  "92c74c72-d701-4b80-a51b-6ba07240325f.jpg",
  "99b4e4a5-7b11-4681-9219-34e000971eb3.jpg",
  "158c40e7-05e2-434f-a2bc-72870cdf64c2.jpg",
  "211d8c6d-75df-418b-b9a0-54684210364a.jpg",
  "222a8dab-be7a-44d1-badc-ebe38cb4e6b5.jpg",
  "333c47a9-6459-4bff-8cf6-05b8d82295b8.jpg",
  "492b08be-3f25-4c38-b9cb-8313a0f75c2e.jpg",
  "581ef210-8024-43e4-b55d-7e4653751839.jpg",
  "698e99a0-ebe7-46f5-9b3a-fa18d1262c8e.jpg",
  "2956be9c-f0a2-492a-a5bd-29ebdce883ed.jpg",
  "3885ae58-a6c6-4e69-95c2-8f671b024f46.jpg",
  "4323d87c-241f-49fa-9e95-c9b618f09cf2e.jpg",
  "5995c2a3-40e3-4f50-a351-6f3832360659.jpg",
  "06385fe3-125e-4548-849b-f85b43c3df6d.jpg",
  "6969e594-e6a6-4a07-ada5-9f79515437c2e.jpg",
  "7066ef2a-3e39-4f8e-a346-c1b4a70cca67.jpg",
  "9298f26c-397c-4629-a6dc-0cf9ad1f8249.jpg",
  "72049c63-6911-46dc-aac9-f6f2543dbe13.jpg",
  "75501dcb-37f1-4fe0-9c45-099da0206e40.jpg",
  "93408f9b-030d-4ccf-a5a8-03248a031308.jpg",
  "131859e6-9010-4013-9350-9fd6594e4c3a.jpg",
  "5918508b-2dfe-4bdb-86ab-48bbd8d0b238.jpg",
  "6310044e-bbc3-4f99-be51-44693e5d5a6f.jpg",
  "7293781d-8922-4221-afb2-3088aacd2827.jpg",
  "9642930f-1340-455f-99fd-fb1b4833c3fd.jpg",
  "21415491-9c71-47c2-a0dd-defd54746188.jpg",
  "34971253-e404-4102-9c8f-9f462cf9fe1.jpg",
  "68974395-664b-4a18-be16-357352ffb38e.jpg",
  "83993442-227c-48f4-8337-e812c168610f.jpg",
  "90404759-48b4-4182-b3d9-eb01bc73364f.jpg",
  "a79c082f-babb-4879-b53a-2412558b761b.jpg",
  "a0778c93-8a26-4d55-a069-4bc1e04d1106.jpg",
  "aa08ca39-1f81-42d6-8843-1102d587a6f9.jpg",
  "b6d9f0d0-3e26-4660-aaa7-0126a3d60e97.jpg",
  "b4175c46-029a-415f-b4e3-71859c9da416.jpg",
  "b0750186-acc0-4d8d-8084-f531d066dc15.jpg",
  "b9089315-37b3-4438-be35-126e2154a987.jpg",
  "bc2adc14-8101-48c7-995d-5e6279fb1949.jpg",
  "be23898f-c739-4dfc-81ae-a75c4ac9bb22.jpg",
  "c66fe17e-bfcf-4e0f-b674-2e9ee55d6102.jpg",
  "c68ca086-0530-4b38-a8e0-69e580691422.jpg",
  "c82c0b60-fba9-4900-b2c2-713cb249cbf0.jpg",
  "c758f464-18dd-4ab6-9f58-bbe88e98818f.jpg",
  "c3383037-8299-4937-8b09-0e51d717720d.jpg",
  "cb6d2fc0-0ffb-42d9-8761-8cab859c2a21.jpg",
  "cbdcded1-fd04-4390-9b8f-de135239a9c8.jpg",
  "cf7dcdae-7cbf-456b-96f6-3db3673677c4.jpg",
  "cfead27e-9ff9-4524-9f88-984f5bbbd67c.jpg",
  "d1fe0b05-484a-45ba-a8d6-33f94928c618.jpg",
  "d2c5d8c6-17f7-4c2d-8040-c64225f52a99.jpg",
  "d5ab2fc7-79ef-43c0-8e50-544ed53fc1fc.jpg",
  "d7df2c63-47dc-4ee2-8b7c-5e373426d8a4.jpg",
  "d056aaf1-b1c7-4045-b070-ce3281e69db6.jpg",
  "d90fc444-47d5-48cb-8c29-7a5c5d47b82c.jpg",
  "d131f35b-0f78-487d-a82b-4e1452d7a31a.jpg",
  "d493d43c-3e1b-43ed-9eac-9301273fbcf9.jpg",
  "d9159ec1-bdd9-4860-8eb2-f049d2c358f0.jpg",
  "d13087a4-b668-443e-af9b-6f4ee3199065.jpg",
  "d27407ff-4607-45f7-b403-e498640284f1.jpg",
  "d055877e-82eb-4a1d-b555-6625d4a68059.jpg",
  "d966623d-584c-4edf-bb05-39a57294e9d4.jpg",
  "da9b0d56-0193-4ffc-a07e-1cd764cad539.jpg",
  "dc37f8c5-bf9f-4c9c-8ecb-a61afa2fa3d7.jpg",
  "e2a996d3-f961-4284-8568-553ce09686ef.jpg",
  "e3c48164-6dbd-4dc4-81c4-5a6178eddb1a.jpg",
  "e9f2f54d-43d4-4f19-85cf-708cb2a8db83.jpg",
  "eb8779e7-1755-400b-b01b-ff4d4e1beb9d.jpg",
  "effbc214-3b82-4b73-88f2-1a0253a9a7a.jpg",
  "f6df6a37-8ff8-40cf-a326-741d3e8c9383.jpg",
  "f19c1c20-8953-4438-9ae8-ec2797ef8a9a.jpg",
  "f62e47ab-759b-455e-8872-5304c3cc3178.jpg",
  "f104c97f-5581-4b58-82e2-680e14d0535a.jpg",
  "f58489ab-69fb-44c4-aff0-d755193a951d.jpg",
  "f1798442-fc4a-4efe-ae2e-0b8cd516f085.jpg",
  "fb8e9947-691d-4aaf-9a25-adf664dd0a7a.jpg",
  "ff00cb5c-6933-44a3-903a-fbbcc29812fb.jpg"
];


const buildGallery = () => {
  const fragment = document.createDocumentFragment();

  images.forEach((img) => {
    const card = document.createElement("div");
    card.className = "gallery__item";

    const image = document.createElement("img");
    image.src = `img/${img}`;
    image.alt = "BOYZ ON THE BLK collection photo";
    image.loading = "lazy";

    const overlay = document.createElement("div");
    overlay.className = "gallery__overlay";

    // Click opens lightbox
    card.addEventListener("click", () => openLightbox(img));

    card.appendChild(image);
    card.appendChild(overlay);
    fragment.appendChild(card);
  });

  gallery.appendChild(fragment);
};

const openLightbox = (imgName) => {
  lightboxImg.src = `img/${imgName}`;
  lightboxDownload.href = `img/${imgName}`;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");

  // Accessibility focus
  lightboxClose.focus();
};

const closeLightbox = () => {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
};

// Close on outside click
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

// Close button
lightboxClose.addEventListener("click", closeLightbox);

buildGallery();
