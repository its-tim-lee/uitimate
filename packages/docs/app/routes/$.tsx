import { useTranslation } from "react-i18next"
import { href, useNavigate } from "react-router"
import { Icon } from "@/library/icon/Icon"
import { Link } from "@/library/link"

export default function Route404() {
	const navigate = useNavigate()
	const { t } = useTranslation()
	const to = href("/")
	return (
		<div className="tw:min-h-screen tw:bg-gradient-to-b tw:from-gray-50 tw:to-gray-100 tw:dark:from-blue-950 tw:dark:to-blue-900 tw:dark:text-white tw:flex tw:items-center tw:justify-center tw:p-4">
			<div className="tw:max-w-2xl tw:w-full tw:text-center">
				<div className="tw:mb-8 tw:flex tw:justify-center">
					<Icon name="Ghost" className="tw:h-24 tw:w-24 tw:text-indigo-600 tw:animate-float" />
				</div>

				<h1 className="tw:text-6xl tw:font-bold tw:dark:text-white tw:text-gray-900 tw:mb-4">404</h1>
				<h2 className="tw:text-3xl tw:font-semibold tw:dark:text-white tw:text-gray-800 tw:mb-4">{t("error.404.title")}</h2>
				<p className="tw:text-gray-600 tw:dark:text-white tw:mb-8 tw:text-lg">{t("error.404.description")}</p>

				<div className="tw:flex tw:flex-col tw:sm:flex-row tw:gap-4 tw:justify-center">
					<button
						type="button"
						onClick={() => navigate(-1)}
						className="tw:inline-flex tw:cursor-pointer tw:items-center tw:justify-center tw:px-6 tw:py-3 tw:border tw:border-transparent tw:text-base tw:font-medium tw:rounded-md tw:text-indigo-700 tw:bg-indigo-100 tw:hover:bg-indigo-200 tw:transition-colors tw:duration-300"
					>
						{t("navigation.back")}
					</button>
					<Link
						to={to}
						className="tw:inline-flex tw:cursor-pointer tw:items-center tw:justify-center tw:px-6 tw:py-3 tw:border tw:border-transparent tw:text-base tw:font-medium tw:rounded-md tw:text-white tw:bg-indigo-600 tw:hover:bg-indigo-700 tw:transition-colors tw:duration-300"
					>
						{t("navigation.home")}
					</Link>
				</div>
			</div>
		</div>
	)
}
