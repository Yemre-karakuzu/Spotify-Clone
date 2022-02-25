function PlayList() {
  return (
    <nav className="mx-6 mt-4 py-2  flex-auto border-t border-white border-opacity-20  overflow-auto">
      <ul>
        <li>
          {new Array(40).fill(
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              22. Çalma Listem
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PlayList;
