import { client } from '@/src/sanity/client';

export const revalidate = 300; // Keep it fast: Update the static page at most every 5 minutes

const NOTICES_QUERY = `*[_type == "notice"] | order(date desc) {
  _id,
  title,
  date,
  message,
  "pdfUrl": pdfFile.asset->url
}`;

export default async function NoticeWidget() {
  const notices = await client.fetch(NOTICES_QUERY);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-black">Latest Notices</h2>
      {notices.map((notice: any) => (
        <div key={notice._id} className="border-b pb-4">
          <p className="text-sm text-gray-500">{notice.date}</p>
          <h3 className="text-lg font-semibold">{notice.title}</h3>
          {notice.message && (
            <p className="text-gray-700 mt-1">{notice.message}</p>
          )}
          {notice.pdfUrl && (
            <a
              href={notice.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-blue-500 hover:underline text-sm font-medium"
            >
              📄 Open Attached PDF
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
