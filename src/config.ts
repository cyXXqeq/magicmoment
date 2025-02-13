import { assets } from "$app/paths";

export const config = {
	mainPage: {
		heading: "Привет, Алёна!",
		invitation: "Ты пойдешь со мной смотреть аниме на этой неделе? 👉👈🥺",
		yesText: "Да",
		noText: "Нет",
		topImage: `${assets}/Assets/Top_picture/Cute_pic2.jpg`,
		leftHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
		rightHeart: `${assets}/Assets/Hearts/heart_3d.gif`,
	},
	noPage: {
		message: '"Нет" – это вообще не вариант😁',
		image: `${assets}/Assets/No_picture/kermit-shooting.gif`,
	},
	yesPage: {
		message: "Увидимся на этой неделе 😄",
		image: `${assets}/Assets/Yes_picture/Yes.gif`,
	},
};
