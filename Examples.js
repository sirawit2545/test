//capToFront("hApPy") = "APhpy"
//capToFront("moveMENT") = "MENTmove"
//capToFront("shOrtCAKE") = "OCAKEshrt"

const result = [...'hApPy'].sort(l => /[A-Z]/.test(l) ? -1 : 0).join('');

console.log(result);