export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
             {children}
            <h1>Product Layout</h1>
            <p>This is the layout for product pages.</p>
           
        </div>
    );
}