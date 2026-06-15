export const menuItems = [
  {
    id: 1,
    title: "HOME",
    link: "/",
  },
  {
    id: 2,
    title: "TENTANG",
    link: "/tentang-kami",
  },
  {
    id: 3,
    title: "PROGRAM",
    subMenuItems: [
      { id: 31, label: "Program Pendidikan", link: "/program-pendidikan" },
      { id: 32, label: "Kalender Pendidikan", link: "/kalender-pendidikan" },
      { id: 33, label: "Kegiatan Harian", link: "/kegiatan-harian" },
    ],
  },
  {
    id: 4,
    title: "PORTOFOLIO",
    subMenuItems: [
      { id: 41, label: "Portofolio Alumni", link: "/portofolio-alumni" },
      { id: 42, label: "Galeri Siswa", link: "/galeri-siswa" },
      { id: 43, label: "Dokumentasi Event", link: "/dokumentasi-event" },
    ],
  },
  {
    id: 5,
    title: "SHOP",
    link: "/digital-shop",
  },
  {
    id: 6,
    title: "PPDB",
    link: "/ppdb",
  },
];
