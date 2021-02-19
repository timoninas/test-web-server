#include <stdio.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>

void test_process(void) {
	int fd = open("/proc/process_sched_add", O_RDWR);

 	char str[80];
	sprintf (str, "%d", getpid());
	lseek(fd, 0 , SEEK_SET);
	write(fd, str, 10);
	
	close(fd);

	while(1) {
 		printf("My pid: %d\n", getpid());
 		sleep(1);
 	}
}

int main() {
    test_pr();
	return 0;
}
