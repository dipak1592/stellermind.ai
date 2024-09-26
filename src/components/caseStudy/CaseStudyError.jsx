import React from 'react'
import Link from 'next/link'

function CaseStudyError() {
    return (
        <div>
          <div className="text-center py-[100px] text-white">
            <h2 className="text-[22px] font-semibold mb-3">
              Looks like we are not able to show the Case Studies due to some problem.
            </h2>
            <hr />
            <p className="mt-3 text-[20px]">
              You can try later or Contact us for project requirements on
              <Link
                className="text-blue-700 underline underline-offset-4"
                href="mailto:info@betasource.tech"
              >
                {" info@betasource.tech"}
              </Link>
              {" or "}
              <Link
                className="text-blue-700 underline underline-offset-4"
                href="tel:+917863889382"
              >
                +91 786 3889 382
              </Link>
              . We will reach out to you within 24 hours.
            </p>
            <div className="flex justify-center py-8">
              <Link href="/contact">
                <button
                  className="flex items-center border border-gray-500 text-[18px] gap-2 py-2 px-4 bg-gradient-to-r from-[#3b83f631] to-[#00800038] hover:border hover:border-white text-white font-bold rounded"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
    )
}

export default CaseStudyError
