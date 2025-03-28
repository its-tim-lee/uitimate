import { useTranslation } from "react-i18next"
import { useLocation } from "react-router"
import { supportedLanguages } from "@/localization/resource"
import { Link } from "../link"

const LanguageSwitcher = () => {
	const { i18n } = useTranslation()
	const location = useLocation()
	const to = location.pathname

	return (
		<div className="tw:flex tw:gap-2 tw:p-2 tw:fixed tw:top-0 tw:right-0 tw:w-min tw:z-10">
			{supportedLanguages.map((language) => (
				<Link
					className="tw:text-blue-500 tw:dark:text-white tw:hover:underline tw:transition-all"
					key={language}
					to={`${to}?lng=${language}`}
					onClick={() => i18n.changeLanguage(language)}
				>
					{language}
				</Link>
			))}
		</div>
	)
}

export { LanguageSwitcher }
