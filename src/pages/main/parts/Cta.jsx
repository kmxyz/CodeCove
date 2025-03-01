const Cta = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[var(--primary)] rounded-xl py-16 px-8 md:px-16 text-center text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white opacity-10 rounded-full translate-x-1/4 translate-y-1/4"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto relative z-10">
              Let's work together to create a website or app that drives growth
              for your business
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-white text-[var(--primary)] hover:bg-gray-100">
                Get a Free Consultation
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[var(--primary)]">
                View Our Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
