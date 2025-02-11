import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
    return <div className="w-full h-full flex justify-center bg-red-300">{children}</div>;
}
