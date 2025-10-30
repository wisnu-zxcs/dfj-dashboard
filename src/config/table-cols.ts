export const TABLE_COLUMNS = [
    { key: "company", label: "Nama Perusahaan" },
    { key: "role", label: "Job Role" },
    { key: "experience", label: "Pengalaman Minimum" },
    { key: "salary", label: "Gaji", highlight: true },
    { key: "education", label: "Gelar Pendidikan Minimum" },
    {
        key: "hardSkills",
        label: "Keterampilan Teknis (Hard Skills)",
        note: "3 Teratas",
        bgClass: "bg-blue-50"
    },
    {
        key: "softSkills",
        label: "Keterampilan Non-Teknis (Soft Skills)",
        note: "1–2 Teratas",
        bgClass: "bg-purple-50"
    },
    { key: "certification", label: "Sertifikasi yang Diminta" },
    { key: "location", label: "Lokasi" },
] as const;