import { APP_CONFIG } from "../config/app";
import { cn } from "../utils/styles";
import type { FC, ReactNode } from "react";

interface PageFooterProps {
    team?: string;
    year?: number;
    version?: string;
    className?: string;
}

interface TechIconProps {
    svg: ReactNode;
    alt: string;
}

const TechIcon: FC<TechIconProps> = ({ svg, alt }) => (
    <div className="group relative">
        {svg}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {alt}
        </span>
    </div>
);

const TechStack: FC = () => (
    <div className="flex items-center gap-2">
        <TechIcon
            svg={
                <svg className="rounded-lg shadow-md ring ring-gray-200" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                    <g fill="none">
                        <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
                        <path fill="#00d8ff" d="M128.001 146.951c10.304 0 18.656-8.353 18.656-18.656s-8.352-18.656-18.656-18.656s-18.656 8.353-18.656 18.656s8.353 18.656 18.656 18.656"></path>
                        <path stroke="#00d8ff" strokeWidth={8.911} d="M128.002 90.363c25.048 0 48.317 3.594 65.862 9.635C215.003 107.275 228 118.306 228 128.295c0 10.409-13.774 22.128-36.475 29.649c-17.162 5.686-39.746 8.654-63.523 8.654c-24.378 0-47.463-2.786-64.819-8.717C41.225 150.376 28 138.506 28 128.295c0-9.908 12.41-20.854 33.252-28.12c17.61-6.14 41.453-9.812 66.746-9.812z" clipRule="evenodd"></path>
                        <path stroke="#00d8ff" strokeWidth={8.911} d="M94.981 109.438c12.514-21.698 27.251-40.06 41.249-52.24c16.864-14.677 32.914-20.425 41.566-15.436c9.017 5.2 12.288 22.988 7.463 46.41c-3.645 17.707-12.359 38.753-24.238 59.351c-12.179 21.118-26.124 39.724-39.931 51.792c-17.471 15.272-34.362 20.799-43.207 15.698c-8.583-4.946-11.865-21.167-7.747-42.852c3.479-18.323 12.21-40.812 24.841-62.723z" clipRule="evenodd"></path>
                        <path stroke="#00d8ff" strokeWidth={8.911} d="M95.012 147.578c-12.549-21.674-21.093-43.616-24.659-61.826c-4.293-21.941-1.258-38.716 7.387-43.72c9.009-5.216 26.052.834 43.934 16.712c13.52 12.004 27.403 30.061 39.316 50.639c12.214 21.098 21.368 42.473 24.929 60.461c4.506 22.764.859 40.157-7.978 45.272c-8.574 4.964-24.265-.291-40.996-14.689c-14.136-12.164-29.26-30.959-41.933-52.849Z" clipRule="evenodd"></path>
                    </g>
                </svg>
            }
            alt="React"
        />

        <span className="text-gray-400 font-bold">+</span>

        <TechIcon
            svg={
                <svg className="rounded-lg shadow-md ring ring-gray-200" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                    <g fill="none">
                        <rect width={256} height={256} fill="#f4f2ed" rx={60}></rect>
                        <path fill="url(#SVGYCM7xdyn)" fillRule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clipRule="evenodd"></path>
                        <defs>
                            <linearGradient id="SVGYCM7xdyn" x1={86.5} x2={163.5} y1={74} y2={185.5} gradientUnits="userSpaceOnUse">
                                <stop stopColor="#32b1c1"></stop>
                                <stop offset={1} stopColor="#14c6b7"></stop>
                            </linearGradient>
                        </defs>
                    </g>
                </svg>
            }
            alt="Tailwind CSS"
        />

        <span className="text-gray-400 font-bold">+</span>

        <TechIcon
            svg={
                <svg className="rounded-lg shadow-md ring ring-gray-200" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 256 256">
                    <g fill="none">
                        <rect width={256} height={256} fill="#007acc" rx={60}></rect>
                        <path fill="#fff" d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"></path>
                    </g>
                </svg>
            }
            alt="TypeScript"
        />
    </div>
)

export const PageFooter: FC<PageFooterProps> = ({
    team = APP_CONFIG.team,
    year = APP_CONFIG.year,
    version = APP_CONFIG.version,
    className,
}) => (
    <footer className={cn("mt-12 text-center text-gray-500 text-sm space-y-3", className)}>
        <p>© {year} - {team}</p>

        <div className="flex flex-col items-center gap-2">
            <p className="font-medium">Built with</p>
            <TechStack />
        </div>

        <p className="text-xs">v{version}</p>
    </footer>
)