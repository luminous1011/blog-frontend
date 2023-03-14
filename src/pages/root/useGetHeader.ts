export default function () {
  const header = document.getElementById("header");

  header?.classList.add("root-header");
  return {
    header,
  };
}
