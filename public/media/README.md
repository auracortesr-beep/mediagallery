Drop real photo/image files here, mirroring whatever relative path you use
in the `Image Path or URL` column of `src/data/source/media_photos.csv`.

Example: a CSV row with `bavaro/rooms/ljs-01.jpg` should have its file at
`public/media/bavaro/rooms/ljs-01.jpg`. Vite serves this directory as-is
from `/media/...`, so that CSV row resolves to `/media/bavaro/rooms/ljs-01.jpg`
at runtime.

If you'd rather host images elsewhere (S3, Cloudinary, etc.), just put the
full `https://...` URL in the CSV instead — anything starting with `http`
is used as-is, nothing needs to go in this folder.

After adding files and CSV rows, run `npm run gen:data` to regenerate.
